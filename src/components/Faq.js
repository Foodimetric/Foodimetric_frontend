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
          <h4>What is Foodimetrics?</h4>  
          <img src={down} alt='chevron' />
        </div>
        {activeItem === 1 && (
          <div className="faq-answer">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
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
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => handleItemClick(4)}>
        <div className='accordion'>
          <h4>What is Nutrition?</h4>
          <img src={down} alt='chevron' />
        </div>
        {activeItem === 4 && (
          <div className="faq-answer">
            <p>
              Yes, it is safe to use Lorem Ipsum as dummy text.
            </p>
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => handleItemClick(5)}>
        <div className='accordion'>
          <h4>What is Nutrition composition?</h4>
          <img src={down} alt='chevron' />
        </div>
        {activeItem === 5 && (
          <div className="faq-answer">
            <p>
              To get started with Lorem Ipsum, simply download a lorem ipsum generator or use a Lorem Ipsum generator website.
            </p>
          </div>
        )}
      </div>
      <div className="faq-item" onClick={() => handleItemClick(6)}>
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
      </div>
    </section>
  );
};

export default Faq;
