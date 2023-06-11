import React from 'react';
import partner from '../assets/feature_2.png'
import './component.css'


const Partner = () => {
    return (
        <section className="partners">
            <div className="container2">
                <h2>Our Partners</h2>
                <div className="partner-logos">
                    <img src={partner} alt="Partner 1"/>
                    <img src={partner} alt="Partner 2"/>
                    <img src={partner} alt="Partner 3"/>
                    <img src={partner} alt="Partner 4"/>
                    <img src={partner} alt="Partner 5"/>
                    <img src={partner} alt="Partner 6"/>
                    <img src={partner} alt="Partner 7"/>
                </div>
            </div>
        </section>
    );
}
 
export default Partner;