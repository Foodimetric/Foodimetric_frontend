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
                        <h3 className="card-heading">Nutrient Composition</h3>
                        <p className="card-text">The nutritional content of food is all the substances that are in it which help you to remain healthy. Water, ash, protein, lipid, carbohydrate, sugar.</p>
                    </div>
                    <div className="card">
                        <img src={feature_2} alt="Feature 2" />
                        <h3 className="card-heading">Food Composition</h3>
                        <p className="card-text">Food composition data (FCD) is a detailed set of information on the nutritional important components of foods.</p>
                    </div>
                    <div className="card">
                        <img src={feature_3} alt="Feature 3" />
                        <h3 className="card-heading">Food Search</h3>
                        <p className="card-text">Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Features;