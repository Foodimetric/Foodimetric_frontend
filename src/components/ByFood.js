import { useState } from 'react';
import './search.css'

const ByFood = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedFood, setSelectedFood] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleCategoryChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedCategory(selectedValue);
        if (selectedValue === "Others") {
            setFilteredData(props.data?.payload)
            return;
        }

        const filtered = props.data?.payload?.filter((item) => item.foodName.toLowerCase().includes(selectedValue.toLowerCase())
        );

        setFilteredData(filtered);
    };
    const filteredDataToDisplay = filteredData.length === 0 ? (props.data?.payload ?? []) : filteredData;

    const handleFoodChange = (e) => {
        setSelectedFood(e.target.value);
    }

    const handleGrams = (e) => {
        props.setSelectedValue(e.target.value);
    };


    const resetFields = () => {
        setSelectedCategory('');
        setSelectedFood('');
        props.setSelectedValue("")
    };

    const searchFood = () => {
        if (props.data?.payload && selectedFood) {
            const foundFood = props.data.payload.find(foodItem => foodItem.foodName === selectedFood);
            if (foundFood) {
                props.setFood(foundFood);
            } else {
                props.setFood("Food not found");
            }
        } else {
            props.setFood("Data not available");
        }

        console.log(selectedFood);
        resetFields();
    };
    return (
        <>
            <div className="search-form">
                {props.render && <div className="form-group">
                    <label htmlFor="weight">{props.weight}</label>
                    <select id="weight" name="weight" onChange={handleCategoryChange} value={selectedCategory}>
                        <option value=""></option>
                        <option value="Fruit">Fruit</option>
                        <option value="Vegetable">Vegetable</option>
                        <option value="Protein">Protein</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Milk">Milk</option>
                        <option value="Oil">Oil</option>
                        <option value="Tuber">Tuber</option>
                        <option value="Grains">Grains</option>
                        <option value="Cereal">Cereal</option>
                        <option value="Beverage">Beverage</option>
                        <option value="Desserts">Dessert</option>
                        <option value="Sweet">Sweet</option>
                        <option value="Snack">Snack</option>
                        <option value="Condiment">Condiment</option>
                        <option value="Sauces">Sauce</option>
                        <option value="Herb">Herb</option>
                        <option value="Spice">Spice</option>
                        <option value="Others">Others</option>
                    </select>
                </div>}
                <div className="form-group">
                    <label htmlFor="searchFood">{props.searchfood}</label>
                    <select id="searchFood" name="searchFood" onChange={handleFoodChange}>
                        {filteredDataToDisplay?.map((item) => (
                            <option key={item._id} value={item.foodName}>
                                {item.foodName}
                            </option>
                        ))}
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
                        value={props.selectedValue}
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