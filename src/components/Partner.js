import React from 'react';
import diet from '../assets/diet.png'
import adtech from '../assets/adtech.png'
import './component.css'


const Partner = () => {
    return (
        <section className="partners">
            <div className="container2">
                <h2>Our Partners</h2>
                <div className="partner-logos">
                    <img src={diet} alt="Partner 1" />
                    <img src={adtech} alt="Partner 2" />
                </div>
            </div>
        </section>
    );
}

export default Partner;