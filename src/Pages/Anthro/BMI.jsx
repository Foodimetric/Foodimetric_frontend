import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProceedButton from '../../Components/Buttons/ProceedButton';

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

const BMI = () => {
    const [weight, setWeight] = useState(30);
    const [height, setHeight] = useState(150);

    const handleWeightChange = (event, newValue) => {
        setWeight(newValue);
    };

    const handleHeightChange = (event, newValue) => {
        setHeight(newValue);
    };

    const handleProceed = () => {
        alert('Proceed button clicked');
    };


    return (
        <main class="py-8">
            <div class="bg-white p-8 min-h-screen">
                <Box sx={{ width: 350, margin: 'auto', textAlign: 'center' }}>
                    <Typography variant="h6">Weight (kg)</Typography>
                    <CustomSlider
                        value={weight}
                        onChange={handleWeightChange}
                        aria-label="Weight"
                        defaultValue={30}
                        step={1}
                        marks
                        min={10}
                        max={200}
                        valueLabelDisplay="on"
                    />
                    <Typography variant="body1">Current Weight: {weight} kg</Typography>
                </Box>
                <Box sx={{ width: 350, margin: 'auto', textAlign: 'center', mt: 4 }}>
                    <Typography variant="h6">Height (cm)</Typography>
                    <CustomSlider
                        value={height}
                        onChange={handleHeightChange}
                        aria-label="Height"
                        defaultValue={150}
                        step={1}
                        marks
                        min={50}
                        max={250}
                        valueLabelDisplay="on"
                    />
                    <Typography variant="body1">Current Height: {height} cm</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <ProceedButton color="#ffba08" type="button" auth="authorized" onClick={handleProceed} width="350px" />
                </Box>
            </div>
        </main>
    );
}

export default BMI;
