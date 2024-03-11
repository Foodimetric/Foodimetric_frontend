import React from 'react';
import './pages.css';

const FindAlternative = () => {
    return (
        <main className='alt-food-container'>
            <div className='search-alt'>
                <input type='search' id='search_alternative' name='search' placeholder='Search...' />
            </div>
            <div className='search_card'>
                <div className='food'>
                    <p>Apple fruit</p>
                    <div>
                        <img alt='apple' src='./img/apple.png' />
                    </div>
                </div>
                <div className='food-card-details'>
                    <div>
                        <h6>Nutrient description</h6>
                        <p>An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. </p>
                        <button>Show more</button>
                    </div>
                    <div>
                        <h6>Nutrient Information</h6>
                        <p>1 serving/medium apple, provides: </p>
                        <ul>
                            <li>Calories: 94.6</li>
                            <li>Water: 156 grams</li>
                            <li>Protein: 0.43 grams</li>
                            <li>Carbs: 25.1 grams</li>
                        </ul>
                    </div>

                </div>

            </div>
        </main>
    );
}

export default FindAlternative;