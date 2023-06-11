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
                    <input type="text" id="searchFood" name="searchFood" />
                    <img src={down} alt='down'/>
                </div>
                <div className="form-group">
                    <label htmlFor="foodCategory">{props.foodcategory}</label>
                    <input type="text" id="foodCategory" name="foodCategory" />
                    <img src={down} alt='down'/>
                </div>
                <div className="form-group">
                    <label htmlFor="weight">{props.weight}</label>
                    <input type="text" id="weight" name="weight" />
                    <img src={down} alt='down'/>
                </div>
                <div className="form-group">
                    <label htmlFor="foodGroup">{props.foodgroup}</label>
                    <input type="text" id="foodGroup" name="foodGroup" />
                    <img src={down} alt='down'/>
                </div>
            </div>
            <div className='proceed'>
                <button>Proceed <img src={right} alt='right'  height={"20px"} width={"20px"}/></button>
            </div>
        </>
    );
}

export default ByFood;