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

const EE = () => {
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(170);
    const [age, setAge] = useState(25);
    const [gender, setGender] = useState('male');
    const [activityLevel, setActivityLevel] = useState(1.2); // Sedentary
    const [tee, setTee] = useState(null);

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

    const handleActivityLevelChange = (e) => setActivityLevel(e.target.value);

    const calculateTEE = () => {
        let bmr;
        const heightInMeters = height / 100;

        // Mifflin-St Jeor Equation for BMR
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Calculate TEE
        const teeValue = bmr * activityLevel;
        setTee(teeValue);
    };

    const handleProceed = () => {
        calculateTEE();
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
                        min={1}
                        max={150}
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
                        defaultValue={170}
                        step={1}
                        marks
                        min={30}
                        max={250}
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
                        defaultValue={25}
                        step={1}
                        marks
                        min={0}
                        max={100}
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
                    <Box sx={{ textAlign: 'left', mt: 2 }}>
                        <FormLabel component="legend">Activity Level</FormLabel>
                        <RadioGroup
                            row
                            value={activityLevel}
                            onChange={handleActivityLevelChange}
                            aria-label="activity level"
                            name="activity level"
                        >
                            <FormControlLabel value={1.2} control={<CustomRadio />} label="Sedentary" />
                            <FormControlLabel value={1.375} control={<CustomRadio />} label="Lightly Active" />
                            <FormControlLabel value={1.55} control={<CustomRadio />} label="Moderately Active" />
                            <FormControlLabel value={1.725} control={<CustomRadio />} label="Very Active" />
                            <FormControlLabel value={1.9} control={<CustomRadio />} label="Extra Active" />
                        </RadioGroup>
                    </Box>
                    <ProceedButton color="#ffba08" type="button" auth="authorized" onClick={handleProceed} />
                    {tee !== null && (
                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Your Total Energy Expenditure is: {tee.toFixed(2)} kcal/day
                        </Typography>
                    )}
                </Box>
            </div>
        </main>
    );
};

export default EE;
