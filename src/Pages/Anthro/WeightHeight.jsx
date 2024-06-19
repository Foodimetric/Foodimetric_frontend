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

const WeightHeight = () => {
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(170);
    const [gender, setGender] = useState('male');
    const [result, setResult] = useState(null);

    const handleWeightChange = (event, newValue) => {
        setWeight(newValue);
    };

    const handleHeightChange = (event, newValue) => {
        setHeight(newValue);
    };

    const handleGenderChange = (e) => setGender(e.target.value);

    const calculateWeightForHeight = () => {
        let isHealthy;
        // Example weight-for-height ranges; in a real application, use medically accurate data.
        if (height <= 150) {
            isHealthy = weight >= 45 && weight <= 60;
        } else if (height <= 160) {
            isHealthy = weight >= 50 && weight <= 65;
        } else if (height <= 170) {
            isHealthy = weight >= 55 && weight <= 70;
        } else if (height <= 180) {
            isHealthy = weight >= 60 && weight <= 80;
        } else {
            isHealthy = weight >= 65 && weight <= 90;
        }
        setResult(isHealthy ? 'Within healthy range' : 'Outside healthy range');
    };

    const handleProceed = () => {
        calculateWeightForHeight();
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
                        defaultValue={70}
                        step={1}
                        marks
                        min={30}
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
                        min={100}
                        max={250}
                        valueLabelDisplay="on"
                    />
                    <Typography variant="body1">Current Height: {height} cm</Typography>
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
                    {result !== null && (
                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Your weight is: {result}
                        </Typography>
                    )}
                </Box>
            </div>
        </main>
    );
};

export default WeightHeight;
