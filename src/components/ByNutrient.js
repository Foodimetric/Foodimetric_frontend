import React, { useState } from 'react';
import './search.css';
import { findKeyByWord } from '../utils/findkey';

const ByNutrient = (props) => {
    const [selectedWeight, setSelectedWeight] = useState('100'); // State for weight
    const [selectedSearchFood, setSelectedSearchFood] = useState(''); // State for searchFood
    const [selectedNutrient, setSelectedNutrient] = useState(''); // State for foodCategory

    const handleProceedClick = (e) => {
        e.preventDefault();
        const foundFood = props.data.payload.find(foodItem => foodItem.foodName === selectedSearchFood);
        if (foundFood && selectedNutrient) {
            const selectedFoodDetails = findKeyByWord(foundFood.details, selectedNutrient);
            const nutrientValue = foundFood.details[selectedFoodDetails]
            props.setNutrientResult({
                nutrientValue: nutrientValue,
                nutrientName: selectedFoodDetails,
                nutrientQuantity: selectedWeight,
                foodName: selectedSearchFood
            })
            console.log('Selected Food Details:', nutrientValue);
        } else {
            console.log('Food not found in the data.');
        }
        setSelectedWeight("")
        setSelectedNutrient("")
    };



    return (
        <form>
            <div className="search-form">
                <div className="form-group">
                    <label htmlFor="searchFood">{props.searchfood}</label>
                    <select
                        required
                        id="searchFood"
                        name="searchFood"
                        value={selectedNutrient}
                        onChange={(e) => setSelectedNutrient(e.target.value)}
                    >
                        <option value={""}></option>
                        <option value="CALCIUM">CALCIUM (mg)</option>
                        <option value="IRON">IRON (mg)</option>
                        <option value="MAGNESIUM">MAGNESIUM (mg)</option>
                        <option value="PHOSPHORUS\n(mg)">PHOSPHORUS (mg)</option>
                        <option value="POTASSIUM">POTASSIUM (mg)</option>
                        <option value="SODIUM">SODIUM (mg)</option>
                        <option value="ZINC">ZINC (mg)</option>
                        <option value="COPPER">COPPER (mg)</option>
                        <option value="VIT A RE">VIT A RE (mcg)</option>
                        <option value="VIT A RAE">VIT A RAE (mcg)</option>
                        <option value="RETINOL">RETINOL (mcg)</option>
                        <option value="BETA-CAROTENE EQUIV">BETA-CAROTENE EQUIV</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="foodCategory">{props.foodcategory}</label>
                    <input
                        type="number"
                        id="foodCategory"
                        name="foodCategory"
                        min="1" // Set the minimum value to 1
                        max='1000'
                        value={selectedWeight}
                        onChange={(e) => setSelectedWeight(e.target.value)}
                    />

                </div>
            </div>
            <div className="form-group">
                <label htmlFor="weight">{props.weight}</label>
                <select
                    required
                    id="weight"
                    name="weight"
                    value={selectedSearchFood}
                    onChange={(e) => setSelectedSearchFood(e.target.value)}
                >
                    <option value={""}></option>
                    {props.data?.payload?.map((item) => (
                        <option key={item._id} value={item.foodName}>
                            {item.foodName}
                        </option>
                    ))}
                </select>
            </div>
            {!props.nutrientResult.nutrientName && props.nutrientResult.foodName && <p className='error nutrient-error'>No Result found</p>}
            <div className='proceed'>
                <button onClick={handleProceedClick}>Proceed</button>
            </div>
        </form>
    );
}

export default ByNutrient;