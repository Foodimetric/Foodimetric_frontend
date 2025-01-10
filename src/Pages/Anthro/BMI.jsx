import React, { useRef, useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';
import ProceedButton from '../../Components/Buttons/ProceedButton';
import { useAuth } from '../../Context/AuthContext';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';

const BMI = ({ islandingPage }) => {
    const { user } = useAuth();
    const [weight, setWeight] = useState(30);
    const [height, setHeight] = useState(150);
    const [bmi, setBmi] = useState(0);
    const [openModal, setOpenModal] = useState(false);


    const lineAnimationEl = useRef(null);

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    // Calculate BMI by formula (height in meters)
    const calculateBmi = (w, h) => {
        if (!h) return 0;

        // Convert user input to float
        const weight = parseFloat(w);
        const height = parseFloat(h);

        // Basic validation
        if (height <= 0) {
            return 0;
        }

        // BMI: weight (kg) / (height in m)^2
        return weight / Math.pow(height, 2);
    };


    // Function to figure out the textual category
    const getBmiCategory = (bmiValue) => {
        const toFixed = Number(bmiValue.toFixed(2));

        switch (true) {
            case toFixed < 18.5:
                return 'Underweight';
            case toFixed >= 18.5 && toFixed <= 24.99:
                return 'Normal BMI';
            case toFixed >= 25 && toFixed <= 29.99:
                return 'Overweight';
            default:
                return 'Obese';
        }
    };

    // Color-coded if you want to style your text
    const getBmiColor = (bmiValue) => {
        const toFixed = Number(bmiValue.toFixed(2));
        switch (true) {
            case toFixed < 18.5:
                return 'red'; // Underweight
            case toFixed >= 18.5 && toFixed <= 24.99:
                return 'green'; // Normal
            case toFixed >= 25 && toFixed <= 29.99:
                return 'orange'; // Overweight
            default:
                return 'red'; // Obese
        }
    };

    function updateLineRotation(_bmi) {
        if (!lineAnimationEl.current) return;
        // Calculate the slope and y-intercept for linear interpolation
        const bmiValues = [18.7, 20.1, 21.5, 23, 24.4, 25.8, 27.3, 28.7, 30.1];
        const rotationAngles = [34.2, 42.6, 51, 60, 68.4, 76.8, 85.8, 94.2, 102.6];

        const slope = (rotationAngles[rotationAngles.length - 1] - rotationAngles[0]) / (bmiValues[bmiValues.length - 1] - bmiValues[0]);
        const yIntercept = rotationAngles[0] - slope * bmiValues[0];

        console.log("three", slope, _bmi, yIntercept);

        // Calculate the rotation angle using linear interpolation
        const rotationAngle = slope * _bmi + yIntercept;

        console.log("rotation", rotationAngle);

        console.log('node', lineAnimationEl);

        lineAnimationEl.current.setAttribute('to', rotationAngle + ' 140 140');
        lineAnimationEl.current.beginElement();
    }


    const handleProceed = async () => {
        const computedBmi = calculateBmi(weight, height);
        setBmi(computedBmi);

        const calculationPayload = {
            user_id: user._id,
            calculator_name: "BMI",
            parameters: {
                weight: `${weight} kg`,
                height: `${height} m`,
            },
            result: `${computedBmi} kg/m²`,
            calculation_details: "BMI calculated using weight in kg and height in cm",
        };

        // 2) Send request to save calculation
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/calculations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(calculationPayload),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Calculation saved successfully:", data);
        } catch (error) {
            console.error("Error saving calculation:", error.message);
        }

        // 3) Update arrow in chart
        updateLineRotation(computedBmi);

        // 4) Show the modal
        setOpenModal(true);
    };


    return (
        <main className="py-8">
            <div
                className={`bg-white p-8 ${islandingPage
                    ? 'h-auto flex flex-col lg:flex-row items-center border-b border-b-[#f7891470] pb-16'
                    : 'min-h-screen'
                    } w-full wraper`}
            >
                {islandingPage && (
                    <div className="flex-1 lg:pr-8 sm:pr-4">
                        <div className="orico-about-text-wrap 111">
                            <div className="orico-about-text">
                                <span className="text-xl font-heading-font inline-block mb-1 font-normal underline text-[#F78914]">
                                    NUTRITIONAL STATS
                                </span>
                                <h2 className="text-4xl font-normal font-heading-font mb-5 lg:text-4xl sm:text-3xl">
                                    Track Your Health
                                </h2>
                                <p className="mb-5">
                                    We offer a comprehensive range of tools and resources to help
                                    you monitor and improve your health. From our BMI calculator
                                    and other anthropometric calculators to essential nutritional
                                    metrics.
                                    <br />
                                    Dive into our nutrition education page for expert insights and
                                    practical tips, and explore our nutritional tools to set and
                                    achieve your health goals.
                                </p>
                                <a
                                    className="theme-btn bg-[#147E03] hover:bg-[#289217]"
                                    href="/anthro/BMI"
                                >
                                    More Tools
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex-1 mt-8 lg:mt-0">
                    <Box
                        sx={{
                            maxWidth: { xs: '100%', sm: '100%', lg: 400 },
                            margin: 'auto',
                            padding: { xs: 2, sm: 4 },
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6">Weight (kg)</Typography>
                        <TextField
                            type="number"
                            value={weight}
                            onChange={handleWeightChange}
                            inputProps={{ min: 10, max: 200, step: 1 }}
                            sx={{ width: '100%', mt: 2 }}
                        />
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Current Weight: {weight} kg
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            maxWidth: { xs: '100%', sm: '100%', lg: 400 },
                            margin: 'auto',
                            padding: { xs: 2, sm: 4 },
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6">Height (m)</Typography>
                        <TextField
                            type="number"
                            value={height}
                            onChange={handleHeightChange}
                            inputProps={{ min: 50, max: 250, step: 1 }}
                            sx={{ width: '100%', mt: 2 }}
                        />
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Current Height: {height} m
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <ProceedButton
                            color="#ffba08"
                            type="button"
                            auth="authorized"
                            onClick={handleProceed}
                            width="350px"
                        />
                    </Box>
                </div>
            </div>

            {/* Modal with the BMI result and the chart */}
            <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="md" keepMounted>
                <DialogTitle className='sr-only'>Your BMI</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            minWidth: '300px',
                            textAlign: 'center',
                            my: 2,
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ mb: 1, fontWeight: 'bold' }}
                        >
                            Your BMI is: {bmi.toFixed(2)} Kgm²
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: getBmiColor(bmi), mb: 2 }}>
                            Category: {getBmiCategory(bmi)}
                        </Typography>

                        {/** The original SVG, but we reference our ref for the line animation */}
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
                                    <animateTransform ref={lineAnimationEl} id="lineAnimation" attributeName="transform" attributeType="XML" type="rotate" from="0 140 140" to="0 140 140" dur="1s" fill="freeze" repeatCount="1"></animateTransform>
                                </line>
                                <text x="67" y="120" style={{ fontSize: '26px', fontWeight: 'bold', color: '#000' }}>{`BMI = ${bmi.toFixed(2)}`}</text>
                            </g>
                        </svg>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenModal(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </main>
    );
};

export default BMI;
