import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProceedButton from '../../Components/Buttons/ProceedButton';

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

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
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
        <main className="py-8">
            <div className="bg-white p-8 min-h-screen">
                <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center' }}>

                    <Typography variant="h6" gutterBottom>
                        Weight (kg)
                    </Typography>
                    <TextField
                        type="number"
                        value={weight}
                        onChange={handleWeightChange}
                        label="Weight"
                        variant="outlined"
                        fullWidth
                        inputProps={{ min: 30, max: 150 }}
                    />
                    <Typography variant="body1">Current Weight: {weight} kg</Typography>

                    <Typography variant="h6" gutterBottom>
                        Height (cm)
                    </Typography>
                    <TextField
                        type="number"
                        value={height}
                        onChange={handleHeightChange}
                        label="Height"
                        variant="outlined"
                        fullWidth
                        inputProps={{ min: 100, max: 250 }}
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
