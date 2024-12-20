import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProceedButton from '../../Components/Buttons/ProceedButton';

// Custom styled Slider

// Custom styled Radio
const CustomRadio = styled(Radio)({
    color: '#3a8589',
    '&.Mui-checked': {
        color: '#3a8589',
    },
});

const IBW = () => {
    const [height, setHeight] = useState(170);
    const [gender, setGender] = useState('male');
    const [ibw, setIbw] = useState(null);

    const handleHeightChange = (event, newValue) => {
        setHeight(newValue);
    };

    const handleGenderChange = (e) => setGender(e.target.value);

    const calculateIBW = () => {
        let ibwValue;
        // const heightInInches = height / 2.54;
        if (gender === 'male') {
            ibwValue = 50 + (0.91 * (height - 152.4));
        } else {
            ibwValue = 45.5 + (0.91 * (height - 152.4));
        }
        setIbw(ibwValue);
    };

    const handleProceed = () => {
        calculateIBW();
    };

    console.log(ibw);
    return (
        <main className="py-8 ">
            <div className="bg-white p-8 min-h-screen">
                <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        Height (cm)
                    </Typography>
                    <TextField
                        type='number'
                        value={height}
                        onChange={handleHeightChange}
                        aria-label="Height"
                        inputProps={{ min: 10, max: 200, step: 1 }}
                        sx={{ width: '100%', mt: 2 }}
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
                    <ProceedButton color="#ffba08" type="button" onClick={handleProceed} />
                    {ibw !== null && (
                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Your Ideal Body Weight is: {ibw.toFixed(2)} kg
                        </Typography>
                    )}
                </Box>
            </div>
        </main>
    );
};

export default IBW;
