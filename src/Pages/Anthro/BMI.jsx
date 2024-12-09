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

const BMI = ({ islandingPage }) => {
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
            <div class={`bg-white p-8 ${islandingPage ? 'h-auto flex flex-col lg:flex-row items-center border-b border-b-[#f7891470] pb-16' : 'min-h-screen'}  w-full wraper`}>
                {islandingPage && <div className="flex-1 lg:pr-8 sm:pr-4">
                    <div className="orico-about-text-wrap 111">
                        <div className="orico-about-text">
                            <span
                                className="text-xl font-heading-font inline-block mb-1 font-normal underline text-[#F78914]">PHYSICAL STATS
                            </span>
                            <h2 className="text-4xl font-normal font-heading-font mb-5 lg:text-4xl sm:text-3xl">Track Your Physical Health</h2>
                            <p className="mb-5"> We offer a range of tools to help you monitor and improve your physical health. From our BMI calculator to other essential metrics, our tools empower you to understand your body better and make informed choices for a healthier lifestyle. Explore our physical stat tools to set and reach your wellness goals.</p>
                            <a className="theme-btn bg-[#147E03] hover:bg-[#289217]" href="/anthro/BMI">More Tools</a>
                        </div>
                    </div>
                </div>}
                <div className="flex-1 mt-8 lg:mt-0">
                    <Box sx={{
                        maxWidth: { xs: '100%', sm: '100%', lg: 400 },
                        margin: 'auto',
                        padding: { xs: 2, sm: 4 },
                        textAlign: 'center',
                    }}>
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
                    <Box sx={{
                        maxWidth: { xs: '100%', sm: '100%', lg: 400 },
                        margin: 'auto',
                        padding: { xs: 2, sm: 4 },
                        textAlign: 'center',
                    }}>
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
            </div>
        </main>
    );
}

export default BMI;
