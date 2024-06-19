import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import ProceedButton from '../../Components/Buttons/ProceedButton';

// Custom styled Slider
const CustomSlider = styled(Slider)({
    color: '#3a8589',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#3a8589',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

// Custom styled Radio
const CustomRadio = styled(Radio)({
    color: '#3a8589',
    '&.Mui-checked': {
        color: '#3a8589',
    },
});

const BMIAge = () => {
    const [weight, setWeight] = useState(40);
    const [height, setHeight] = useState(140);
    const [age, setAge] = useState(10);
    const [gender, setGender] = useState('male');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState(null);

    const handleWeightChange = (event, newValue) => {
        setWeight(newValue);
    };

    const handleHeightChange = (event, newValue) => {
        setHeight(newValue);
    };

    const handleAgeChange = (event, newValue) => {
        setAge(newValue);
    };

    const handleGenderChange = (e) => setGender(e.target.value);

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue);
        determineCategory(bmiValue);
    };

    const determineCategory = (bmiValue) => {
        // Dummy percentiles for demonstration. In a real application, these should be obtained from growth charts.
        let percentile;
        if (age <= 10) {
            if (gender === 'male') {
                percentile = bmiValue <= 14 ? 5 : bmiValue <= 18 ? 50 : bmiValue <= 21 ? 85 : 95;
            } else {
                percentile = bmiValue <= 13.5 ? 5 : bmiValue <= 17.5 ? 50 : bmiValue <= 20.5 ? 85 : 95;
            }
        } else {
            percentile = bmiValue <= 15 ? 5 : bmiValue <= 20 ? 50 : bmiValue <= 25 ? 85 : 95;
        }

        if (percentile < 5) {
            setCategory('Underweight');
        } else if (percentile < 85) {
            setCategory('Healthy Weight');
        } else if (percentile < 95) {
            setCategory('Overweight');
        } else {
            setCategory('Obesity');
        }
    };

    const handleProceed = () => {
        calculateBMI();
        alert('Proceed button clicked');
    };

    return (
        <main className="py-8 ">
            <div className="bg-white p-8 min-h-screen">
                <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        Weight (kg)
                    </Typography>
                    <CustomSlider
                        value={weight}
                        onChange={handleWeightChange}
                        aria-label="Weight"
                        defaultValue={40}
                        step={1}
                        marks
                        min={10}
                        max={100}
                        valueLabelDisplay="on"
                    />
                    <Typography variant="body1">Current Weight: {weight} kg</Typography>
                    <Typography variant="h6" gutterBottom>
                        Height (cm)
                    </Typography>
                    <CustomSlider
                        value={height}
                        onChange={handleHeightChange}
                        aria-label="Height"
                        defaultValue={140}
                        step={1}
                        marks
                        min={50}
                        max={200}
                        valueLabelDisplay="on"
                    />
                    <Typography variant="body1">Current Height: {height} cm</Typography>
                    <Typography variant="h6" gutterBottom>
                        Age (years)
                    </Typography>
                    <CustomSlider
                        value={age}
                        onChange={handleAgeChange}
                        aria-label="Age"
                        defaultValue={10}
                        step={1}
                        marks
                        min={2}
                        max={20}
                        valueLabelDisplay="on"
                    />
                    <Typography variant="body1">Current Age: {age} years</Typography>
                    <Box sx={{ textAlign: 'left', mt: 2 }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            row
                            value={gender}
                            onChange={handleGenderChange}
                            aria-label="gender"
                            name="gender"
                        >
                            <FormControlLabel value="male" control={<CustomRadio />} label="Male" />
                            <FormControlLabel value="female" control={<CustomRadio />} label="Female" />
                        </RadioGroup>
                    </Box>
                    <ProceedButton color="#ffba08" type="button" auth="authorized" onClick={handleProceed} />
                    {bmi !== null && (
                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Your BMI is: {bmi.toFixed(2)}
                        </Typography>
                    )}
                    {category !== null && (
                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Weight Status Category: {category}
                        </Typography>
                    )}
                </Box>
            </div>
        </main>
    );
};

export default BMIAge;
