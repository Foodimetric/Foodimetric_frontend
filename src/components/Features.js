import React from 'react';
import './component.css'
import feature_1 from '../assets/feature_1.svg'
import feature_2 from '../assets/feature_2.png'
import feature_3 from '../assets/feature_3.png'

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                <h2 className="section-heading">Our Features Includes</h2>
                <div className="card-container">
                    <div className="card">
                        <img src={feature_1} alt="Feature 1" />
                        <h3 className="card-heading">Nutrient Search</h3>
                        <p className="card-text">Understanding the quantity of food required to meet up our daily nutrient requirements is an integral part of healthiness. With the nutrient and multi-nutrient search features, you can determine the required quantity of food that will provide you certain quantity of nutrient(s).</p>
                    </div>
                    <div className="card">
                        <img src={feature_3} alt="Feature 3" />
                        <h3 className="card-heading">Food Search</h3>
                        <p className="card-text"> Each food has a unique nutrient profile that contributes to our overall health and well-being. With the food and multi-food search features, you can explore the nutrient composition of foods.</p>
                    </div>
                    <div className="card">
                        <img src={feature_2} alt="Feature 2" />
                        <h3 className="card-heading">BMI Calculator</h3>
                        <p className="card-text">Body Mass Index is a widely used method to assess nutrition status by measuring weight and height. With the BMI calculator, you can get an insight of your nutritional status (underweight, normal weight, overweight, or obese).</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;