import { useState, useEffect, useMemo } from 'react';
import './search.css';

const ByFood = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedFood, setSelectedFood] = useState('');
    const [grams, setGrams] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (selectedCategory === "Others") {
            setFilteredData(props.data?.payload);
        } else {
            const filtered = props.data?.payload?.filter(item =>
                item.details?.Category.toLowerCase().includes(selectedCategory.toLowerCase()));
            setFilteredData(filtered);
        }
    }, [selectedCategory, props.data?.payload]);

    const filteredDataToDisplay = useMemo(() => (
        filteredData?.length === 0 ? (props.data?.payload ?? []) : filteredData
    ), [filteredData, props.data?.payload]);

    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
    const handleFoodChange = (e) => setSelectedFood(e.target.value);
    const handleGrams = (e) => setGrams(e.target.value);

    // const resetFields = () => {
    //     setSelectedCategory('');
    //     setSelectedFood('');
    //     setGrams('');
    //     props.setSelectedValue("");
    // };

    const searchFood = () => {
        props.setSelectedValue(grams);
        const foundFood = props.data?.payload?.find(foodItem => foodItem.foodName === selectedFood);
        props.setFood(foundFood || "Data not available");
        setGrams('');
    };

    function renderOptions(data) {
        const uniqueCategories = Array.from(new Set(data?.map(item => item?.details?.Category)));
        return uniqueCategories?.map(category => (
            <option key={category} value={category}>{category}</option>
        ));
    }

    return (
        <>
            <div className="search-form">
                {props.render && <div className="form-group">
                    <label htmlFor="weight">{props.weight}</label>
                    <select id="weight" name="weight" onChange={handleCategoryChange} value={selectedCategory}>
                        <option value=""></option>
                        {renderOptions(props.data?.payload)}
                    </select>
                </div>}
                <div className="form-group">
                    <label htmlFor="searchFood">{props.searchfood}</label>
                    <select id="searchFood" name="searchFood" onChange={handleFoodChange} value={selectedFood}>
                        {filteredDataToDisplay?.map((item) => (
                            <option key={item._id} value={item.foodName}>{item.foodName}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="foodCategory">{props.foodcategory}</label>
                    <input
                        type="number"
                        id="foodCategory"
                        name="foodCategory"
                        min="1"
                        max="1000"
                        value={grams}
                        onChange={handleGrams}
                    />
                </div>
            </div>
            <div className='proceed'>
                <button onClick={searchFood}>Proceed</button>
            </div>
        </>
    );
}

export default ByFood;
