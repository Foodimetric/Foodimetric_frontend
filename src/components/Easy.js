import React from 'react';
import easy_1 from '../assets/easy_1.png'
import easy_2 from '../assets/easy_2.png'
import easy_3 from '../assets/easy_3.png'
import arrow_1 from '../assets/arrow_1.svg'
import arrow_2 from '../assets/arrow_2.svg'

const Easy = () => {
    return (
        <section className="easy-to-use">
            <div className="container">
                <h2 className="section-heading">Easy to Use in Few Clicks</h2>
                <div className="card-container">
                    <div className="card-group">
                        <div className="card">
                            <div className="icon">
                                <img src={easy_1} alt='step one' />
                            </div>
                            <h3 className="card-heading">Search</h3>
                        </div>
                        <p className="card-text">Search for food by clicking on the search bar or simply type in the food in the search bar.</p>
                    </div>
                    <div className="arrow">
                        <img src={arrow_1} alt='direction'/>
                    </div>
                    <div className="card-group">
                        <div className="card">
                            <div className="icon">
                            <img src={easy_2} alt='step two' />
                            </div>
                            <h3 className="card-heading">Input</h3>
                        </div>
                        <p className="card-text">Input the required parameters such as weight of food in grams.</p>
                    </div>
                    <div className="arrow">
                        <img src={arrow_2} alt='direction' />
                    </div>
                    <div className="card-group">
                        <div className="card">
                            <div className="icon">
                                <img src={easy_3} alt='step three' />
                            </div>
                            <h3 className="card-heading">Done</h3>
                        </div>
                        <p className="card-text">Then click on the “Enter” or “Done”  button to proceed.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Easy;