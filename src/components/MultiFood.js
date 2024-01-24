import React, { useState, useCallback } from 'react';
import './component.css';
import { multiSearchFood } from '../utils/findkey';

const MultiFood = ({ data, setResult }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [weight, setWeight] = useState('100');
    const [searchData, setSearchData] = useState([]);
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    const handleSearchInputChange = useCallback((e) => {
        const newQuery = e.target.value;
        setSearchQuery(newQuery);

        if (!newQuery) {
            setFilteredFoods([]);
            return;
        }

        const filteredResults = data?.payload?.filter((food) =>
            food.foodName.toLowerCase().includes(newQuery.toLowerCase())
        );
        setFilteredFoods(filteredResults);
    }, [data]);

    const handleFoodItemClick = useCallback((foodName) => {
        setSearchQuery(foodName);
        setFilteredFoods([]);
    }, []);

    const handleSave = useCallback((e) => {
        e.preventDefault();
        setSearchData(searchData => [...searchData, { foodName: searchQuery, weight }]);
        setSearchQuery('');
        setWeight('100');
    }, [searchQuery, weight]);

    const removeItem = useCallback((index) => {
        setSearchData(searchData => searchData.filter((_, i) => i !== index));
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setFormSubmitted(true);
        const result = multiSearchFood(searchData, data);
        setResult(result);
        setSearchData([]);
    }, [searchData, data, setResult]);

    return (
        <>
            <div className='proceed' style={{ justifyContent: "end", width: '91%' }}>
                <button onClick={handleSave} style={{ width: "max-content", padding: '0.5rem 1rem', marginTop: '0px' }} disabled={searchData.length === 5}>Save</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="search-form">
                    <div className="form-group search-container">
                    <label htmlFor="searchFood">Search Food</label>
                        <input
                            type='search'
                            id='searchFood'
                            className="search-input"
                            name='searchFood'
                            placeholder='Search'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        {filteredFoods.length > 0 && (
                            <ul className="results-list">
                                {filteredFoods.map((food) => (
                                    <li key={food._id} className="result-item" onClick={() => handleFoodItemClick(food.foodName)}>{food.foodName}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Weight">Weight</label>
                        <select id="foodCategory" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)}>
                            <option value="100">100g</option>
                            <option value="90">90g</option>
                            <option value="80">80g</option>
                            <option value="70">70g</option>
                            <option value="60">60g</option>
                            <option value="50">50g</option>
                            <option value="40">40g</option>
                            <option value="30">30g</option>
                            <option value="20">20g</option>
                            <option value="10">10g</option>
                            <option value="5">5g</option>
                        </select>
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
            </form>
        </>
    );
}

export default MultiFood;