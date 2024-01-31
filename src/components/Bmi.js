import React, { useState } from 'react';
import './component.css';

const BodyMassIndex = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [Bmi, setBmi] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleProceedClick = () => {
    setShowModal(true);
    const value = (parseFloat(weight) / Math.pow(parseFloat(height), 2))
    setBmi(value);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  const getBmiCategory = () => {
    switch (true) {
      case Bmi < 18.5:
        return 'Underweight';
      case Bmi >= 18.5 && Bmi <= 24.9:
        return 'Normal weight';
      case Bmi >= 25 && Bmi <= 29.9:
        return 'Overweight';
      default:
        return 'Obese';
    }
  };  


  const getBmiColor = () => {
    switch (true) {
      case Bmi < 18.5:
        return 'red'; // Underweight
      case Bmi >= 18.5 && Bmi <= 24.9:
        return 'green'; // Normal weight
      case Bmi >= 25 && Bmi <= 29.9:
        return 'white'; // Overweight (warning)
      default:
        return 'red'; // Obese
    }
  };
  
  return (
    <div className="Bmi-content">
      <div className="Bmi_weight">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
          placeholder="in kilograms"
        />
      </div>

      <div className="Bmi_height">
        <label htmlFor="height">Height (m):</label>
        <input
          type="number"
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
            <h3>{`${Bmi.toFixed(2)}Kgm²`}</h3>
            <p style={{ color: getBmiColor(), marginBottom: '0.5rem', fontWeight: 'bold'}}>{`Category: ${getBmiCategory()}`}</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyMassIndex;
