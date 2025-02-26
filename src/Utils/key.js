export function findKeyByWord(object, searchWord) {
    for (const key in object) {
        if (key.includes(searchWord)) {
            return key;
        }
    }
    return null;
}

export function multiSearchFood(searchData, data, selectedDb) {
    const matchedFoods = [];
    searchData.forEach(searchItem => {
        const matchingFood = data?.find(food =>
            food.foodName.toLowerCase() === searchItem.foodName.toLowerCase()
        );

        if (matchingFood) {
            if (selectedDb === 'nigeria') {
                // For Nigeria, update weight in details
                matchingFood.details.WEIGHT = searchItem.selectedWeight;
            } else if (selectedDb === 'west_africa') {
                // For West Africa, update weight in nutrients
                matchingFood.nutrients.WEIGHT = searchItem.selectedWeight;
            }

            // Push the updated food item into the matchedFoods array
            matchedFoods.push(matchingFood);
        }
    });

    const excludeKeys = ['Id', 'Code', 'REFID', "FOOD CODE", 'EDIBLE1'];

    return matchedFoods.map((item) => {
        // Make a copy of details (to avoid mutating the original object)
        // const detailsCopy = { ...item.details };
        const detailsCopy = selectedDb === 'nigeria'
            ? { ...item.details } // For Nigeria, copy details
            : { ...item.nutrients }; // For West Africa, copy nutrients

        // Remove the keys you want to exclude
        excludeKeys.forEach((key) => {
            delete detailsCopy[key];
        });

        const processedDetails = selectedDb === "west_africa" ? cleanAndConvertFoodData(detailsCopy) : detailsCopy;
        // Return the filtered details
        return processedDetails;
    });
}

export const extractUnit = (nutrient) => {
    const matches = nutrient.match(/\(([^()]+)\)/g); // Find all occurrences of parentheses

    if (!matches) return ""; // Return empty string if no match found

    // Extract the last occurrence and remove surrounding parentheses
    return matches[matches.length - 1].replace(/[()]/g, "");
};


function getFormattedValue(value) {
    let newValue = value; // Default to original value

    // Remove square brackets if value is a string
    if (typeof value === "string") {
        newValue = newValue.replace(/^\[|\]$/g, ""); // Removes leading '[' and trailing ']'

        // Check for parentheses and extract number inside them
        const match = newValue.match(/\((\d+(\.\d+)?)\)/); // Matches the number inside parentheses
        if (match) {
            newValue = match[1]; // Extract kcal value (inside parentheses)
        }
    }

    return newValue;
}

export function multiNutrientSearch(searchData, data, selectedDb) {
    const searchResults = [];
    for (const query of searchData) {
        const matchingDataItem = data?.find((item) => item.foodName === query.foodName);
        if (matchingDataItem) {
            const matchingKey = findKeyByWord(selectedDb === "west_africa" ? matchingDataItem.nutrients : matchingDataItem.details, query.nutrient);
            if (matchingKey && query.nutrient) {
                console.log('matching', matchingDataItem);
                const unit = extractUnit(query.nutrient)
                searchResults.push({
                    foodName: query.foodName,
                    nutrient: query.nutrient,
                    nutrientWeight: `${query.foodWeight} ${unit}`,
                    foodResult: selectedDb === "west_africa" ? getFormattedValue(matchingDataItem.nutrients[matchingKey]) : matchingDataItem.details[matchingKey],
                });
            } else {
                searchResults.push({
                    foodName: query.foodName,
                    foodWeight: query.foodWeight,
                    nutrient: query.nutrient,
                    result: "Nutrient not found"
                });
            }
        } else {
            searchResults.push({
                foodName: query.foodName,
                foodWeight: query.foodWeight,
                nutrient: query.nutrient,
                result: "Food not found in data"
            });
        }
    }
    return searchResults.map((item) => {
        const newResult =
            item.result === 'Food not found in data' || item.result === 'Nutrient not found'
                ? item.result
                : ((parseFloat(item.nutrientWeight) * 100) / parseFloat(item.foodResult)).toFixed(2).toString();

        return {
            ...item,         // include all existing fields
            foodResult: `${newResult}g` // overwrite the result field
        };
    });
}


export function addTotal(obj) {
    const totals = {};

    obj.forEach(array => {
        array.forEach((row) => {
            const { key, value } = row;

            if (totals[key]) {
                totals[key] += Number(value); // Ensure consistent numeric type for adding
            } else {
                totals[key] = Number(value);
            }
        });
    })

    return totals;
}


export function cleanAndConvertFoodData(data) {
    const cleanedData = {};

    for (const [key, value] of Object.entries(data)) {
        if (key === "FOOD CODE" || key === "FOOD NAME IN ENGLISH" || key === "WEIGHT") {
            // Skip these keys
            cleanedData[key] = value;
            continue;
        }

        if (typeof value === "string") {
            let cleanedValue = value.trim();

            // Handle case with brackets like "FOLATE (mcg) : [140]"
            if (cleanedValue.startsWith("[") && cleanedValue.endsWith("]")) {
                cleanedValue = cleanedValue.slice(1, -1); // Remove brackets
            }

            // Handle case like "ENERC (kJ(kcal)) : 1 460(344)"
            if (cleanedValue.includes("(") && cleanedValue.includes(")")) {
                const regex = /(.+?)\((.+?)\)/; // Matches value before and inside brackets
                const match = cleanedValue.match(regex);
                if (match) {
                    const beforeBracket = match[1].replace(/\s/g, ""); // Remove spaces
                    const insideBracket = match[2].replace(/\s/g, ""); // Remove spaces

                    // Create new keys for ENERGY(KJ) and ENERGY(KCAL)
                    const kjKey = key.replace(/\(.*\)/, "(KJ)"); // Replace text inside brackets with "(KJ)"
                    const kcalKey = key.replace(/\(.*\)/, "(KCAL)"); // Replace text inside brackets with "(KCAL)"

                    // Convert to numbers if valid
                    if (!isZero(beforeBracket)) cleanedData[kjKey] = !isNaN(beforeBracket) ? Number(beforeBracket) : beforeBracket;
                    if (!isZero(insideBracket)) cleanedData[kcalKey] = !isNaN(insideBracket) ? Number(insideBracket) : insideBracket;
                    continue;
                }
            }

            // Remove any commas in numbers like "1,460"
            cleanedValue = cleanedValue.replace(/,/g, "");

            // Convert to number if possible
            if (!isZero(cleanedValue)) {
                cleanedData[key] = !isNaN(cleanedValue) && cleanedValue !== "" ? Number(cleanedValue) : cleanedValue;
            }
        } else {
            // For non-string values, just keep them as is if they are not zero or null
            if (value !== null && !isZero(value)) {
                cleanedData[key] = value;
            }
        }
    }

    const orderedKeys = [
        "FOOD NAME IN ENGLISH",
        "ENERC (KJ)",
        "ENERC (KCAL)",
        "WATER (g)",
        "PROTCNT (g)",
        "FAT (g)",
        "ASH (g)",
        "CALCIUM (mg)",
        "IRON (mg)",
        "SODIUM (mg)"
    ];

    const orderedData = {};

    // Add keys in the specified order first
    for (const key of orderedKeys) {
        if (key in cleanedData) {
            orderedData[key] = cleanedData[key];
        }
    }

    // Add any remaining keys that were not in the specified order
    for (const [key, value] of Object.entries(cleanedData)) {
        if (!orderedData.hasOwnProperty(key)) {
            orderedData[key] = value;
        }
    }
    return orderedData;
}

// Helper function to check if a value is zero (including variations like "0.000" or 0)
function isZero(value) {
    if (value === 0 || value === "0") return true;
    if (typeof value === "string" && /^0(\.0+)?$/.test(value)) {
        return true;
    }
    return false;
}
