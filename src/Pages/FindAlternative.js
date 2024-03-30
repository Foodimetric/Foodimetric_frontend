import React, { useState } from 'react';
import './pages.css';
import { altdata } from '../utils/data';

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

    const renderNutrients = (foodNutrient) => {
        const nutrients = [];
        for (const key in foodNutrient) {
            nutrients.push(
                <li key={key}>{key}: {foodNutrient[key]}</li>
            );
        }
    
        return nutrients;
    };

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredAlternatives = altdata.filter(alternative =>
        alternative.foodName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alternative.prominent_nutrient.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className='alt-food-container'>
             <div className='search-alt'>
                <input
                    type='search'
                    id='search_alternative'
                    name='search'
                    placeholder='Search...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            {filteredAlternatives
            .map((data, index) =>
            <div className='alt-component' key={data.foodID}>
                <div className='search_card'>
                    <div className='food'>
                        <p>{data.foodName}</p>
                        <div>
                            <img alt={data.foodName} src={data.imageURL} />
                        </div>
                    </div>
                    <div className={showMore.card1 ? 'show-more' : 'food-card-details'}>
                        <div>
                            <h6>Food description</h6>
                            <p id='group'>Food Group: <span>{data.foodType}</span></p>
                            <p>{data.description}</p>
                        </div>
                        <div>
                            <h6>Nutrient Information</h6>
                            <p>100g provides:  </p>
                            <ul>
                                {renderNutrients(data.foodNutrient)}
                            </ul>
                        </div>

                    </div>
                    <button className='search_card_btn' onClick={() => toggleDescription('card1')}>
                        {showMore.card1 ? 'Show less' : 'Show more'}
                    </button>
                </div>
                <h6 id='alt-heading'>Alternative to {data.foodName}</h6>
                <div className='search_card' id='alt-card'>
                    <div className='food'>
                        <p>{data.alternativeFoodName}</p>
                        <div>
                            <img alt={data.alternativeFoodName} src={data.alternativeImageURL} />
                        </div>
                    </div>
                    <div className={showMore.card2 ? 'show-more' : 'food-card-details'}>
                        <div>
                            <h6>Food description</h6>
                            <p id='group'>Food Group: <span>{data.alternativeFoodType}</span></p>
                            <p>{data.alternativeDescription}</p>
                        </div>
                        <div>
                            <h6>Nutrient Information</h6>
                            <p>100g provides: </p>
                            <ul>
                                {renderNutrients(data.altfoodNutrient)}
                            </ul>
                        </div>

                    </div>
                      <button className='search_card_btn' onClick={() => toggleDescription('card2')}>
                        {showMore.card2 ? 'Show less' : 'Show more'}
                    </button>
                    <div class="line-break"></div>
                </div>
            </div>)}
            {filteredAlternatives.length === 0 && <p>No result found</p>}
        </main>
    );
}

export default FindAlternative;