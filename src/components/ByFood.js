import React from 'react';
import './search.css'
import down from '../assets/arrowdown2.svg'
import right from '../assets/arrowright2.svg'

const ByFood = (props) => {
    return (
        <>
            <div className="search-form">
                <div className="form-group">
                    <label htmlFor="searchFood">{props.searchfood}</label>
                    <select id="searchFood" name="searchFood">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="foodCategory">{props.foodcategory}</label>
                    <select id="foodCategory" name="foodCategory">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="weight">{props.weight}</label>
                    <select id="weight" name="weight">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="foodGroup">{props.foodgroup}</label>
                    <select id="foodGroup" name="foodGroup">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>
            <div className='proceed'>
                <button>Proceed <img src={right} alt='right' height={"20px"} width={"20px"} /></button>
            </div>
        </>
    );
}

export default ByFood;