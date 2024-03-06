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

  
  const handleModalClose = () => {
    setShowModal(false);
  };


  const getBmiCategory = () => {
    const BmiToFixed = Bmi.toFixed(2);
    switch (true) {
      case BmiToFixed < 18.5:
        return 'Underweight';
      case BmiToFixed >= 18.5 && BmiToFixed <= 24.99:
        return 'Normal BMI';
      case BmiToFixed >= 25 && BmiToFixed <= 29.99:
        return 'Overweight';
      default:
        return 'Obese';
    }
  };

  const getBmiColor = () => {
    const BmiToFixed = Bmi.toFixed(2);
    switch (true) {
      case BmiToFixed < 18.5:
        return 'red'; // Underweight
      case BmiToFixed >= 18.5 && BmiToFixed <= 24.99:
        return 'green'; // Normal weight
      case BmiToFixed >= 25 && BmiToFixed <= 29.99:
        return 'white'; // Overweight (warning)
      default:
        return 'red'; // Obese
    }

  };

  let lineAnimation = document.getElementById('lineAnimation');

  function updateLineRotation(bmi) {
    // Calculate the slope and y-intercept for linear interpolation
    const bmiValues = [18.7, 20.1, 21.5, 23, 24.4, 25.8, 27.3, 28.7, 30.1];
    const rotationAngles = [34.2, 42.6, 51, 60, 68.4, 76.8, 85.8, 94.2, 102.6];
  
    const slope = (rotationAngles[rotationAngles.length - 1] - rotationAngles[0]) / (bmiValues[bmiValues.length - 1] - bmiValues[0]);
    const yIntercept = rotationAngles[0] - slope * bmiValues[0];
  
    // Calculate the rotation angle using linear interpolation
    const rotationAngle = slope * bmi + yIntercept;
  
    // Set the new rotation angle to the animation
    lineAnimation.setAttribute('to', rotationAngle + ' 140 140');
  
    // Restart the animation (if needed)
    lineAnimation.beginElement();
  }


  const handleProceedClick = () => {
    setShowModal(true);
    const value = (parseFloat(weight) / Math.pow(parseFloat(height), 2))
    setBmi(value);
    updateLineRotation(value);
  };
  
  return (
    <div className="Bmi-content">
      <div className='bmi_body'>
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

        <div className='bmi-proceed'>
          <button onClick={handleProceedClick} className="Bmi_button">
            Proceed
          </button>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="300px" height="163px" viewBox="0 0 300 163">
        <g transform="translate(18,18)" style={{ fontFamily: 'arial, helvetica, sans-serif', fontSize: '12px' }}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7"></polygon>
            </marker>
            <path id="curvetxt1" d="M-4 140 A140 140, 0, 0, 1, 284 140" style={{ fill: 'none' }}></path>
            <path id="curvetxt2" d="M33 43.6 A140 140, 0, 0, 1, 280 140" style={{ fill: 'none' }}></path>
            <path id="curvetxt3" d="M95 3 A140 140, 0, 0, 1, 284 140" style={{ fill: 'none' }}></path>
            <path id="curvetxt4" d="M235.4 33 A140 140, 0, 0, 1, 284 140" style={{ fill: 'none' }}></path>
          </defs>
          <path d="M0 140 A140 140, 0, 0, 1, 6.9 96.7 L140 140 Z" fill="#bc2020"></path>
          <path d="M6.9 96.7 A140 140, 0, 0, 1, 12.1 83.1 L140 140 Z" fill="#d38888"></path>
          <path d="M12.1 83.1 A140 140, 0, 0, 1, 22.6 63.8 L140 140 Z" fill="#ffe400"></path>
          <path d="M22.6 63.8 A140 140, 0, 0, 1, 96.7 6.9 L140 140 Z" fill="#008137"></path>
          <path d="M96.7 6.9 A140 140, 0, 0, 1, 169.1 3.1 L140 140 Z" fill="#ffe400"></path>
          <path d="M169.1 3.1 A140 140, 0, 0, 1, 233.7 36 L140 140 Z" fill="#d38888"></path>
          <path d="M233.7 36 A140 140, 0, 0, 1, 273.1 96.7 L140 140 Z" fill="#bc2020"></path>
          <path d="M273.1 96.7 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#8a0101"></path>
          <path d="M45 140 A90 90, 0, 0, 1, 230 140 Z" fill="#fff"></path>
          <circle cx="140" cy="140" r="5" fill="#666"></circle>
          <g style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: '2px' }}>
            <text x="25" y="111" transform="rotate(-72, 25, 111)">16</text>
            <text x="30" y="96" transform="rotate(-66, 30, 96)">17</text>
            <text x="35" y="83" transform="rotate(-57, 35, 83)">18.5</text>
            <text x="97" y="29" transform="rotate(-18, 97, 29)">25</text>
            <text x="157" y="20" transform="rotate(12, 157, 20)">30</text>
            <text x="214" y="45" transform="rotate(42, 214, 45)">35</text>
            <text x="252" y="95" transform="rotate(72, 252, 95)">40</text>
          </g>
          <g style={{ fontSize: '14px' }}>
            <text><textPath xlinkHref="#curvetxt1">Underweight</textPath></text>
            <text><textPath xlinkHref="#curvetxt2">Normal</textPath></text>
            <text><textPath xlinkHref="#curvetxt3">Overweight</textPath></text>
            <text><textPath xlinkHref="#curvetxt4">Obesity</textPath></text>
          </g>
          <line id="movingLine" x1="140" y1="140" x2="65" y2="140" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)">
            <animateTransform  id="lineAnimation" attributeName="transform" attributeType="XML" type="rotate" from="0 140 140" to="0 140 140" dur="1s" fill="freeze" repeatCount="1"></animateTransform>
          </line>
          <text x="67" y="120" style={{ fontSize: '26px', fontWeight: 'bold', color: '#000' }}>{`BMI = ${Bmi.toFixed(2)}`}</text>
        </g>
      </svg>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p className='Bmi-result'>BMI Result</p>
            <p>Your BMI is:</p>
            <h3>{`${Bmi.toFixed(2)}Kgm²`}</h3>
            <p style={{ color: getBmiColor(), marginBottom: '0.5rem', fontWeight: 'bold' }}>{`Category: ${getBmiCategory()}`}</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyMassIndex;
