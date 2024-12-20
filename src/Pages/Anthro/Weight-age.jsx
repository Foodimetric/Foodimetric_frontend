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

const WeightAge = () => {
    const [weight, setWeight] = useState(50);
    const [age, setAge] = useState(25);
    const [gender, setGender] = useState('male');
    const [result, setResult] = useState(null);

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleGenderChange = (e) => setGender(e.target.value);

    const calculateWeightForAge = () => {
        let isHealthy;
        // Example weight-for-age ranges; in a real application, use medically accurate data.
        if (age <= 1) {
            isHealthy = weight >= 3.5 && weight <= 12;
        } else if (age <= 5) {
            isHealthy = weight >= 12 && weight <= 20;
        } else if (age <= 12) {
            isHealthy = weight >= 20 && weight <= 40;
        } else if (age <= 18) {
            isHealthy = weight >= 40 && weight <= 75;
        } else {
            isHealthy = weight >= 50 && weight <= 100;
        }
        setResult(isHealthy ? 'Within healthy range' : 'Outside healthy range');
    };

    const handleProceed = () => {
        calculateWeightForAge();
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
                        inputProps={{ min: 1, max: 150 }}
                    />
                    <Typography variant="body1">Current Weight: {weight} kg</Typography>
                    <Typography variant="h6" gutterBottom>
                        Age (years)
                    </Typography>
                    <TextField
                        type="number"
                        value={age}
                        onChange={handleAgeChange}
                        label="Age"
                        variant="outlined"
                        fullWidth
                        inputProps={{ min: 0, max: 100 }}
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

export default WeightAge;
