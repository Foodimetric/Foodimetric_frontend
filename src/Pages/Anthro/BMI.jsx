import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import ProceedButton from '../../Components/Buttons/ProceedButton';

const BMI = ({ islandingPage }) => {
    const [weight, setWeight] = useState(30);
    const [height, setHeight] = useState(150);

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleProceed = () => {
        console.log('Proceed button clicked');
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
                                    PHYSICAL STATS
                                </span>
                                <h2 className="text-4xl font-normal font-heading-font mb-5 lg:text-4xl sm:text-3xl">
                                    Track Your Physical Health
                                </h2>
                                <p className="mb-5">
                                    We offer a range of tools to help you monitor and improve your physical health. From our BMI calculator to
                                    other essential metrics, our tools empower you to understand your body better and make informed choices for
                                    a healthier lifestyle. Explore our physical stat tools to set and reach your wellness goals.
                                </p>
                                <a className="theme-btn bg-[#147E03] hover:bg-[#289217]" href="/anthro/BMI">
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
                        <Typography variant="h6">Height (cm)</Typography>
                        <TextField
                            type="number"
                            value={height}
                            onChange={handleHeightChange}
                            inputProps={{ min: 50, max: 250, step: 1 }}
                            sx={{ width: '100%', mt: 2 }}
                        />
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Current Height: {height} cm
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <ProceedButton color="#ffba08" type="button" auth="authorized" onClick={handleProceed} width="350px" />
                    </Box>
                </div>
            </div>
        </main>
    );
};

export default BMI;
