import { useState, useEffect} from 'react';
import './search.css';
import { useFoodContext } from '../Context/FoodContext';
import DropdownSelector from './DropdownSelector';
import { useFoodSearch } from '../utils/useFoodSearch';

const ByFood = () => {
    const { data, filteredFoods, setFilteredFoods, selectedFood, setSelectedFood, selectedWeight, setSelectedWeight, setSelectedValue, setFoodResults, setSearchQuery } = useFoodContext();
    const { handleGroupChange, handleWeightChange } = useFoodSearch();
    const [selectedCategory, setSelectedCategory] = useState('');
    const foodOptions = filteredFoods.map(item => item.foodName);
    const foodGroups = Array.from(new Set(data?.map(item => item?.details?.Category)));

    useEffect(() => {
        selectedCategory && handleGroupChange(selectedCategory);
    }, [handleGroupChange, selectedCategory]);

    const searchFood = (e) => {
        e.preventDefault();
        setSelectedValue(selectedWeight);
        const foundFood = data?.find(foodItem => foodItem.foodName === selectedFood);
        setFoodResults(foundFood || "Data not available");
        setSelectedWeight(0);
        setSelectedFood("");
        setSearchQuery("");
        setFilteredFoods([]);
    };

    return (
        <form onSubmit={searchFood}>
            <div className="search-form">
                <div className="form-group">
                    <label htmlFor="Food-category">Food Groups</label>
                    <DropdownSelector
                        id={"Food-category"}
                        name={"Food-category"}
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                        options={foodGroups}
                        placeholder='Groups'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Food">Food</label>
                    <DropdownSelector
                        id={"Food"}
                        name={"Food"}
                        value={selectedFood}
                        onChange={setSelectedFood}
                        options={foodOptions}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Weight(g) </label>
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
            <div className='proceed'>
                <button type='submit'>Proceed</button>
            </div>
        </form>
    );
}

export default ByFood;
