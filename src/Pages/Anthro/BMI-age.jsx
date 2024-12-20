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

const BMIAge = () => {
    const [weight, setWeight] = useState(40);
    const [height, setHeight] = useState(140);
    const [age, setAge] = useState(10);
    const [gender, setGender] = useState('male');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState(null);

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleGenderChange = (e) => setGender(e.target.value);

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue);
        determineCategory(bmiValue);
    };

    const determineCategory = (bmiValue) => {
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

        if (percentile <= 5) {
            setCategory('Underweight');
        } else if (percentile <= 85) {
            setCategory('Healthy Weight');
        } else if (percentile <= 95) {
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
                    />
                    <Typography variant="body1">Current Height: {height} cm</Typography>
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
