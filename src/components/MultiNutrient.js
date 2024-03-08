import React, { useState } from 'react';
import { multiNutrientSearch } from '../utils/findkey';
import { useFoodContext } from '../Context/FoodContext'
import { useFoodSearch } from '../utils/useFoodSearch'
import SearchInput from './SearchInput';
import DropdownSelector from './DropdownSelector';
import Tooltip from '@mui/material/Tooltip'

const excludeKeys = ['Id', 'Code', 'REFID', 'Category', 'LocalName', 'EnglishName', 'ScientificName', 'FrenchNames'];

const MultiNutrientComponent = () => {
    const { data, setMultiNutrientResult, searchQuery, setSearchQuery, selectedWeight, setSelectedWeight, selectedFood, setSelectedFood, nutrient, setNutrient, filteredFoods} = useFoodContext();
    const { handleSearchChange, selectItem, handleWeightChange } = useFoodSearch();
    const nutrientOptions = Object.entries(nutrient || {}).filter(([key]) => !excludeKeys.includes(key)).map(([key]) => key);
    const [searchData, setSearchData] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleNutrientSave = (e) => {
        e.preventDefault();
        setFormSubmitted(false);
        const search = {
            foodName: searchQuery,
            foodWeight: selectedWeight,
            nutrient: selectedFood
        }
        setSearchData([...searchData, search]);
        setSelectedWeight("");
        setSelectedFood('');
        setSearchQuery('')
    }
    const removeItem = (index) => {
        const updatedSearchData = [...searchData];
        updatedSearchData.splice(index, 1);
        setSearchData(updatedSearchData);
    };

    const handleNutrientSubmit = (e) => {
        e.preventDefault()
        setFormSubmitted(true);
        const result = multiNutrientSearch(searchData, data)
        setMultiNutrientResult(result);
        setSearchData([])
    }

    function searchNutrient(foodName) {
        selectItem(foodName);
        const matchingDataItem = data?.find((item) => item.foodName.toLowerCase() === foodName.toLowerCase());
        setNutrient(matchingDataItem?.details);
    }

    return (
        <>
            <div className='proceed' style={{ justifyContent: "end", width: '91%' }}>
                <button onClick={handleNutrientSave} style={{ width: "max-content", padding: '0.5rem 1rem', marginTop: '0px' }} disabled={searchData.length === 5 ? true : false}>Add</button>
            </div>
            <form onSubmit={handleNutrientSubmit}>
                <div className="form-group search-container">
                    <label htmlFor="MultiNutrient">Search Food</label>
                    <SearchInput
                        id={"MultiNutrient"}
                        name={"MultiNutrient"}
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    {filteredFoods.length > 0 && (
                        <ul className="results-list">
                            {filteredFoods.map((food) => (
                                <li key={`1-${food._id}`} className="result-item" onClick={() => searchNutrient(food.foodName)}>{food.foodName}</li>
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
                    <div style={{ display: "flex", gap: "1rem", marginTop: '1rem', justifyContent: 'center' }}>
                        {searchData && searchData.map((item, index) => (<p key={index} style={{
                            borderRadius: "10px",
                            padding: "5px",
                            fontSize: '12px',
                            textAlign: "center",
                            border: "2px solid orange",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "5px",
                            boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
                        }}>{`${item.foodName.slice(0, 7)}...`}<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 100 100"
                            onClick={() => removeItem(index)}
                            style={{ cursor: 'pointer' }}
                        >
                                <line x1="10" y1="10" x2="90" y2="90" stroke="red" strokeWidth="5" />
                                <line x1="90" y1="10" x2="10" y2="90" stroke="red" strokeWidth="5" />
                            </svg></p>))}
                    </div>
                </div>
                <div className='proceed'>
                    <button disabled={searchData.length < 2 || formSubmitted} type='submit'>
                        <span>Proceed</span>
                        <Tooltip title="Add more than one nutrient to proceed">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className='tips'>
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>
                            </svg>
                        </Tooltip>
                    </button>
                </div>
            </form>
        </>
    );
}

export default MultiNutrientComponent;