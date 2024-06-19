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

const WaterIntake = () => {
    const [weight, setWeight] = useState(70);
    const [age, setAge] = useState(30);
    const [activityLevel, setActivityLevel] = useState('low');
    const [waterIntake, setWaterIntake] = useState(null);

    const handleWeightChange = (event, newValue) => {
        setWeight(newValue);
    };

    const handleAgeChange = (event, newValue) => {
        setAge(newValue);
    };

    const handleActivityLevelChange = (e) => setActivityLevel(e.target.value);

    const calculateWaterIntake = () => {
        let baseIntake = weight * 35;
        if (activityLevel === 'moderate') {
            baseIntake *= 1.2;
        } else if (activityLevel === 'high') {
            baseIntake *= 1.5;
        }
        setWaterIntake(baseIntake / 1000); // Convert to liters
    };

    const handleProceed = () => {
        calculateWaterIntake();
        alert('Proceed button clicked');
    };

    return (
        <main className="py-8">
            <div className="bg-white p-8 min-h-screen">
                <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        Weight (kg)
                    </Typography>
                    <CustomSlider
                        value={weight}
                        onChange={handleWeightChange}
                        aria-label="Weight"
                        defaultValue={70}
                        step={1}
                        marks
                        min={30}
                        max={150}
                        valueLabelDisplay="on"
                    />
                    <Typography variant="body1">Current Weight: {weight} kg</Typography>
                    <Typography variant="h6" gutterBottom>
                        Age (years)
                    </Typography>
                    <CustomSlider
                        value={age}
                        onChange={handleAgeChange}
                        aria-label="Age"
                        defaultValue={30}
                        step={1}
                        marks
                        min={0}
                        max={100}
                        valueLabelDisplay="on"
                    />
                    <Typography variant="body1">Current Age: {age} years</Typography>
                    <Box sx={{ textAlign: 'left', mt: 2 }}>
                        <FormLabel component="legend">Activity Level</FormLabel>
                        <RadioGroup
                            row
                            value={activityLevel}
                            onChange={handleActivityLevelChange}
                            aria-label="activity level"
                            name="activity level"
                        >
                            <FormControlLabel value="low" control={<CustomRadio />} label="Low" />
                            <FormControlLabel value="moderate" control={<CustomRadio />} label="Moderate" />
                            <FormControlLabel value="high" control={<CustomRadio />} label="High" />
                        </RadioGroup>
                    </Box>
                    <ProceedButton color="#ffba08" type="button" auth="authorized" onClick={handleProceed} />
                    {waterIntake !== null && (
                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Your recommended daily water intake is: {waterIntake.toFixed(2)} liters
                        </Typography>
                    )}
                </Box>
            </div>
        </main>
    );
};

export default WaterIntake;
