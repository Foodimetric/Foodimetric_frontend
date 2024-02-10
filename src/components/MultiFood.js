import React, { useState, useCallback } from 'react';
import './component.css';
import { multiSearchFood } from '../utils/findkey';
import { useFoodContext } from '../Context/FoodContext'
import SearchInput from './SearchInput';
import { useFoodSearch } from '../utils/useFoodSearch';
const MultiFood = () => {
    const { data, searchQuery, setSearchQuery, setMultiFoodResults, filteredFoods, setSelectedWeight, selectedWeight } = useFoodContext();
    const { handleSearchChange, selectItem, handleWeightChange } = useFoodSearch();
    const [searchData, setSearchData] = useState([]);
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    const handleSave = useCallback((e) => {
        e.preventDefault();
        setSearchData(searchData => [...searchData, { foodName: searchQuery, selectedWeight }]);
        setSearchQuery('');
        setSelectedWeight(100);
    }, [searchQuery, selectedWeight, setSearchQuery, setSelectedWeight]);

    const removeItem = useCallback((index) => {
        setSearchData(searchData => searchData.filter((_, i) => i !== index));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setFormSubmitted(true);
        const result = multiSearchFood(searchData, data);
        setMultiFoodResults(result);
        setSearchData([]);
    }, [searchData, data, setMultiFoodResults]);

    return (
        <>
            <div className='proceed' style={{ justifyContent: "end", width: '91%' }}>
                <button onClick={handleSave} style={{ width: "max-content", padding: '0.5rem 1rem', marginTop: '0px' }} disabled={searchData.length === 5}>Add</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div className="form-group search-container">
                        <label htmlFor="MultiFood">Search Food</label>
                        <SearchInput
                            id={"MultiFood"}
                            name={"MultiFood"}
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />

                        {filteredFoods.length > 0 && (
                            <ul className="results-list">
                                {filteredFoods.map((food) => (
                                    <li key={food._id} className="result-item" onClick={() => selectItem(food.foodName)}>{food.foodName}</li>
                                ))}
                            </ul>
                        )}
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
                        <div style={{ display: "flex", gap: "1rem", marginTop: '1rem' }}>
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
                </div>
                <div className='proceed'>
                    <button type='submit' disabled={searchData.length < 2 || isFormSubmitted}>Proceed</button>
                </div>
            </form >
        </>
    );
}

export default MultiFood;