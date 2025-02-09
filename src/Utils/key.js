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

    const excludeKeys = ['Id', 'Code', 'REFID'];

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

        // Return the filtered details
        return detailsCopy;
    });
}

export function multiNutrientSearch(searchData, data) {
    const searchResults = [];
    for (const query of searchData) {
        const matchingDataItem = data?.find((item) => item.foodName === query.foodName);
        if (matchingDataItem) {
            const matchingKey = findKeyByWord(matchingDataItem.details, query.nutrient);
            if (matchingKey && query.nutrient) {
                console.log('matching', matchingDataItem.details[matchingKey]);
                searchResults.push({
                    foodName: query.foodName,
                    foodWeight: query.foodWeight,
                    nutrient: query.nutrient,
                    result: matchingDataItem.details[matchingKey]
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
                : ((parseFloat(item.foodWeight) * 100) / parseFloat(item.result)).toFixed(2).toString();

        return {
            ...item,         // include all existing fields
            result: newResult // overwrite the result field
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


