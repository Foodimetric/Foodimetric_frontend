import React, { useState, useCallback } from 'react';
import './search.css';
import { findKeyByWord } from '../utils/findkey';

const excludeKeys = ['Id', 'Code', 'REFID', 'Category', 'LocalName', 'EnglishName', 'ScientificName', 'FrenchNames'];

const ByNutrient = ({ data, setNutrientResult, weight, searchfood, foodcategory, nutrientResult }) => {
    const [selectedWeight, setSelectedWeight] = useState('100');
    const [selectedSearchFood, setSelectedSearchFood] = useState('');
    const [selectedNutrient, setSelectedNutrient] = useState('');
    const [nutrient, setNutrient] = useState(null);

    const handleProceedClick = useCallback((e) => {
        e.preventDefault();
        const foundFood = data.payload.find(foodItem => foodItem.foodName === selectedSearchFood);
        if (foundFood && selectedNutrient) {
            const selectedFoodDetails = findKeyByWord(foundFood.details, selectedNutrient);
            setNutrientResult({
                nutrientValue: foundFood.details[selectedFoodDetails],
                nutrientName: selectedFoodDetails,
                nutrientQuantity: selectedWeight,
                foodName: selectedSearchFood
            });
            console.log('Selected Food Details:', foundFood.details[selectedFoodDetails]);
        } else {
            console.log('Food not found in the data.');
        }
    }, [selectedSearchFood, selectedNutrient, selectedWeight, data, setNutrientResult]);

    const searchNutrients = useCallback((e) => {
        setSelectedSearchFood(e.target.value);
        const foundFood = data.payload.find(foodItem => foodItem.foodName === e.target.value);
        setNutrient(foundFood?.details);
    }, [data]);

    return (
        <form>
            <div className="form-group">
                <label htmlFor="foodNameSelect">{weight}</label>
                <select
                    required
                    id="foodNameSelect"
                    name="weight"
                    value={selectedSearchFood}
                    onChange={searchNutrients}
                >
                    <option value=""></option>
                    {data?.payload?.map((item) => (
                        <option key={item._id} value={item.foodName}>
                            {item.foodName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="search-form">
                <div className="form-group">
                    <label htmlFor="nutrientSelect">{searchfood}</label>
                    <select
                        required
                        id="nutrientSelect"
                        name="searchFood"
                        value={selectedNutrient}
                        onChange={(e) => setSelectedNutrient(e.target.value)}
                    >
                        <option value=""></option>
                        {nutrient && Object.entries(nutrient)
                            .filter(([key]) => !excludeKeys.includes(key))
                            .map(([key]) => (
                                <option value={key}>{key}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="weightInput">{foodcategory}</label>
                    <input
                        type="number"
                        id="weightInput"
                        name="foodCategory"
                        min="1"
                        max="1000"
                        value={selectedWeight}
                        onChange={(e) => setSelectedWeight(e.target.value)}
                    />
                </div>
            </div>
            {!nutrientResult.nutrientName && nutrientResult.foodName && <p className='error nutrient-error'>No Result found</p>}
            <div className='proceed'>
                <button onClick={handleProceedClick}>Proceed</button>
            </div>
        </form>
    );
};

export default ByNutrient;
