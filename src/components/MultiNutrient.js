import React, { useState } from 'react';
import { multiNutrientSearch } from '../utils/findkey';

const excludeKeys = ['Id', 'Code', 'REFID', 'Category', 'LocalName', 'EnglishName', 'ScientificName', 'FrenchNames'];

const MultiNutrientComponent = ({ searchnutrient, food, quantities, data, setMultiNutrientResult }) => {
    const [selectedNutrient, setSelectedNutrient] = useState('');
    const [selectedWeight, setSelectedWeight] = useState('100');
    const [selectedFood, setSelectedFood] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [nutrient, setNutrient] = useState(null);


    const handleNutrientSave = (e) => {
        e.preventDefault();
        setFormSubmitted(false);
        const searchQuery = {
            foodName: selectedFood,
            foodWeight: selectedWeight ===''? "100":selectedWeight,
            nutrient: selectedNutrient
        }
        setSearchData([...searchData, searchQuery]);
        setSelectedWeight("");
        setSelectedFood('')
        setSelectedNutrient('')
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

    const handleFoodChange = (e) => {
        setSelectedFood(e.target.value);
        const matchingDataItem = data?.payload.find((item) => item.foodName === e.target.value);
        setNutrient(matchingDataItem?.details);
    }
    
    return (
        <>
            <div className='proceed' style={{ justifyContent: "end", width: '91%' }}>
                <button onClick={handleNutrientSave} style={{ width: "max-content", padding: '0.5rem 1rem', marginTop: '0px' }} disabled={searchData.length === 5 ? true : false}>Add</button>
            </div>
            <form onSubmit={handleNutrientSubmit}>
                <div className="form-group">
                    <label htmlFor="foodCategory">{food}</label>
                    <select id="foodCategory" name="foodCategory" value={selectedFood} onChange={(e) => handleFoodChange(e)}>
                        <option value={""}></option>
                        {data?.payload?.map((item) => (
                            <option key={item._id} value={item.foodName}>
                                {item.foodName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="search-form">
                    <div className="form-group">
                        <label htmlFor="searchFood">{searchnutrient}</label>
                        <select id="searchFood" name="searchNutrient" value={selectedNutrient} onChange={(e) => setSelectedNutrient(e.target.value)}>
                            <option value={""}></option>
                            {nutrient && Object.entries(nutrient)
                            .filter(([key]) => !excludeKeys.includes(key))
                            .map(([key]) => (
                                <option value={key}>{key}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">{quantities}</label>
                        <select id="weight" name="weight" value={selectedWeight} onChange={(e) => setSelectedWeight(e.target.value)}>
                            <option value={""}></option>
                            <option value="100">100</option>
                            <option value="90">90</option>
                            <option value="80">80</option>
                            <option value="70">70</option>
                            <option value="60">60</option>
                            <option value="50">50</option>
                            <option value="40">40</option>
                            <option value="30">30</option>
                            <option value="20">20</option>
                            <option value="10">10</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", marginTop: '1rem', justifyContent: 'center'}}>
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
                    <button disabled={searchData.length < 2 || formSubmitted}>Proceed</button>
                </div>
            </form>
        </>
    );
}

export default MultiNutrientComponent;