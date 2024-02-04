export function findKeyByWord(object, searchWord) {
  for (const key in object) {
    if (key.includes(searchWord)) {
      return key;
    }
  }
  return null;
}


export function multiSearchFood(searchData, data) {
  const matchedFoods = [];
  searchData.forEach(searchItem => {
    const matchingFood = data?.find(food =>
      food.foodName.toLowerCase() === searchItem.foodName.toLowerCase()
    );

    if (matchingFood) {
      matchingFood.details.WEIGHT = searchItem.selectedWeight
      matchedFoods.push(matchingFood);
    }
  });

  return matchedFoods
}

export function multiNutrientSearch(searchData, data) {
  const searchResults = [];
  for (const query of searchData) {
    const matchingDataItem = data?.find((item) => item.foodName === query.foodName);
    if (matchingDataItem) {
      const matchingKey = findKeyByWord(matchingDataItem.details, query.nutrient);
      if (matchingKey && query.nutrient) {
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

  return searchResults;

}