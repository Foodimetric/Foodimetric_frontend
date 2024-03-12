import React, { useState } from 'react';
import './pages.css';

const FindAlternative = () => {
    const [showMore, setShowMore] = useState({
        card1: false,
        card2: false
    });

    const toggleDescription = (card) => {
        setShowMore(prevState => ({
            ...prevState,
            [card]: !prevState[card]
        }));
    };
    return (
        <main className='alt-food-container'>
            <div className='search-alt'>
                <input type='search' id='search_alternative' name='search' placeholder='Search...' />
            </div>
            <div className='alt-component'>
                <div className='search_card'>
                    <div className='food'>
                        <p>Apple fruit</p>
                        <div>
                            <img alt='apple' src='./img/apple.png' />
                        </div>
                    </div>
                    <div className={showMore.card1 ? 'show-more' : 'food-card-details'}>
                        <div>
                            <h6>Nutrient description</h6>
                            <p>An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica)</p>
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
                    <button className='search_card_btn' onClick={() => toggleDescription('card1')}>
                        {showMore.card1 ? 'Show less' : 'Show more'}
                    </button>
                </div>
                <h6 id='alt-heading'>Alternative to Apple</h6>
                <div className='search_card' id='alt-card'>
                    <div className='food'>
                        <p>Apple fruit</p>
                        <div>
                            <img alt='apple' src='./img/apple.png' />
                        </div>
                    </div>
                    <div className={showMore.card2 ? 'show-more' : 'food-card-details'}>
                        <div>
                            <h6>Nutrient description</h6>
                            <p>An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica)</p>
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
                      <button className='search_card_btn' onClick={() => toggleDescription('card2')}>
                        {showMore.card2 ? 'Show less' : 'Show more'}
                    </button>
                </div>
            </div>
        </main>
    );
}

export default FindAlternative;