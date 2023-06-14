import React, { useState } from 'react';
import './component.css';

const BodyMassIndex = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleProceedClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="Bmi-content">
      <div className="Bmi_weight">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
          placeholder="in kilograms"
        />
      </div>

      <div className="Bmi_height">
        <label htmlFor="height">Height (m²):</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={handleHeightChange}
          placeholder="in metre square"
        />
      </div>

      <button onClick={handleProceedClick} className="Bmi_button">
        Proceed
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p className='Bmi-result'>BMI Result</p>
            <p>Your BMI is:</p>
            <h3>{`Result Kgm²`}</h3>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyMassIndex;
