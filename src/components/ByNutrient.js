import React, { useState, useCallback } from 'react';
import './search.css';
import { findKeyByWord } from '../utils/findkey';
import { useFoodContext } from '../Context/FoodContext';
import SearchInput from './SearchInput';
import { useFoodSearch } from '../utils/useFoodSearch';
import DropdownSelector from './DropdownSelector';

const excludeKeys = ['Id', 'Code', 'REFID', 'Category', 'LocalName', 'EnglishName', 'ScientificName', 'FrenchNames'];
const ByNutrient = () => {
    const { data, selectedWeight, setSelectedWeight, nutrientResult, setNutrientResult, filteredFoods, searchQuery, setSearchQuery, nutrient, setNutrient, selectedFood, setSelectedFood } = useFoodContext();
    const { handleSearchChange, selectItem, handleWeightChange } = useFoodSearch();
    const nutrientOptions = Object.entries(nutrient || {}).filter(([key]) => !excludeKeys.includes(key)).map(([key]) => key);

    const handleProceedClick = useCallback((e) => {
        e.preventDefault();
        const foundFood = data.find(foodItem => foodItem.foodName === searchQuery);
        if (foundFood && selectedFood) {
            const selectedFoodDetails = findKeyByWord(foundFood.details, selectedFood);
            setNutrientResult({
                nutrientValue: foundFood.details[selectedFoodDetails],
                nutrientName: selectedFoodDetails,
                nutrientQuantity: selectedWeight,
                foodName: searchQuery
            });
        } else {
            console.log('Food not found in the data.');
        }

        setSearchQuery("");
        setSelectedWeight(0);
        setSelectedFood(""); 
    }, [data, selectedFood, setSearchQuery, setSelectedWeight, setSelectedFood, searchQuery, setNutrientResult, selectedWeight]);

    const getNutrients = useCallback((foodName) => {
        selectItem(foodName)
        const foundNutrients = data.find(foodItem => foodItem.foodName === foodName);
        setNutrient(foundNutrients.details);
    }, [data, selectItem, setNutrient]);

    return (
        <form onSubmit={handleProceedClick}>
            <div className="form-group search-container">
                <label htmlFor="searchFood">Search Food</label>
                <SearchInput
                    id={"searchFood"}
                    name={"searchFood"}
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                {filteredFoods.length > 0 && (
                    <ul className="results-list">
                        {filteredFoods.map((food) => (
                            <li key={`2-${food._id}`} className="result-item" onClick={() => getNutrients(food.foodName)}>{food.foodName}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="search-form">
                <div className="form-group">
                    <label htmlFor="nutrients">Nutrients</label>
                    <DropdownSelector
                        id={"nutrients"}
                        name={"nutrients"}
                        value={selectedFood}
                        onChange={setSelectedFood}
                        options={nutrientOptions}
                        placeholder='Nutrients'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Weight</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={selectedWeight}
                        onChange={handleWeightChange}
                        min={1} 
                        max={1000}
                        step="0.01"
                    />
                </div>
            </div>
            {!nutrientResult.nutrientName && nutrientResult.foodName && <p className='error nutrient-error'>No Result found</p>}
            <div className='proceed'>
                <button type='submit'>Proceed</button>
            </div>
        </form>
    );
};

export default ByNutrient;
