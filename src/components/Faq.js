import React, { useState } from 'react';
import down from '../assets/down.svg'

const Faq = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <section className="faq-section" id="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item" onClick={() => handleItemClick(1)}>
        <div className='accordion'>
          <h4>What is Foodimetric?</h4>
          <img src={down} alt='chevron' />
        </div>
        {activeItem === 1 && (
          <div className="faq-answer">
            <p>
              Foodimetric is a database-inclined platform that assists users to make informed nutrition choices by providing important information about foods around them. Having noted the gap between nutrition information and healthy eating among Nigerians, Foodimetric present compiled data on several foods around the country in a more relatable way to its users. Foodimetric is an important tool for both nutrition professionals and the general public to identify the nutrient composition of foods and their level of safety.
              Our vision is to advance reality of healthiness to all.
              Our mission is to harness technology resources to improve nutrition and health.
            </p>
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => handleItemClick(4)}>
        <div className='accordion'>
          <h4>Why Foodimetric?</h4>
          <img src={down} alt='chevron' />
        </div>
        {activeItem === 4 && (
          <div className="faq-answer">
            <p>
              Foodimetric improves the knowledge of users about the compositions of their foods and encourage healthy nutrition practices by presenting the data of foods in a simplified and understandable way.
              Foodimetric is a powerful tool for dietetics students and professionals because it ease the process of calculating the nutrient composition of foods for medical nutrition therapy.
              Foodimetric also provide reliable and credible nutrition information.
              Foodimetric aims to encourage researchers to conduct more studies on indigenous food composition in order to further expand the available database.
            </p>
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => handleItemClick(2)}>
        <div className='accordion'>
          <h4>What is Food composition?</h4>
          <img src={down} alt='chevron' />
        </div>
        {activeItem === 2 && (
          <div className="faq-answer">
            <p>
              Food composition refers to the detailed breakdown of the nutrients and other components present in a specific food. This information is important for understanding the nutritional value and potential health benefits of different foods. Food composition data is often used by researchers, nutritionists, and food manufacturers to assess dietary intake and develop guidelines for healthy eating.
            </p>
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => handleItemClick(3)}>
        <div className='accordion'>
          <h4>What is Nutrition?</h4>
          <img src={down} alt='chevron' />
        </div>
        {activeItem === 3 && (
          <div className="faq-answer">
            <p>
              Nutrition refers to the process of obtaining and utilizing food for growth, development, and overall health. It involves the study of nutrients and how they impact us. Good nutrition is essential for maintaining proper bodily functions, supporting growth and development, and preventing diseases. It plays a crucial role in providing energy, building and repairing tissues, and supporting the immune system.
            </p>
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => handleItemClick(5)}>
        <div className='accordion'>
          <h4>What is BMI?</h4>
          <img src={down} alt='chevron' />
        </div>
        {activeItem === 5 && (
          <div className="faq-answer">
            <p>
              BMI stands for Body Mass Index, and it's a measure used to assess a person's body weight in relation to their height. It's a simple calculation that helps determine if a person is underweight, normal weight, overweight, or obese. The formula for BMI is weight (in kilograms) divided by height (in meters) squared. The resulting number can be interpreted using standard BMI categories. However, it's important to note that BMI is a general indicator and does not take into account factors such as muscle mass or body composition. It's always a good idea to consult with a healthcare professional for a comprehensive evaluation of your health and weight.
            </p>
          </div>
        )}
      </div>
      {/* <div className="faq-item" onClick={() => handleItemClick(6)}>
        <div className='accordion'>
          <h4>What is Nutrition research?</h4>
          <img src={down} alt='chevron' />
        </div>
        {activeItem === 6 && (
          <div className="faq-answer">
            <p>
              There is no cost to use Lorem Ipsum as dummy text.
            </p>
          </div>
        )}
      </div> */}
    </section>
  );
};

export default Faq;
