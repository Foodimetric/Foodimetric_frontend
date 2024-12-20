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

const EE = () => {
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(170);
    const [age, setAge] = useState(25);
    const [gender, setGender] = useState('male');
    const [activityLevel, setActivityLevel] = useState(1.2); // Sedentary
    const [tee, setTee] = useState(null);

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

    const handleActivityLevelChange = (e) => setActivityLevel(e.target.value);

    const calculateTEE = () => {
        let bmr;
        const heightInMeters = height / 100;

        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // Calculate TEE
        const teeValue = bmr * activityLevel;
        setTee(teeValue);
    };

    const handleProceed = () => {
        calculateTEE();
        alert('Proceed button clicked');
    };

    console.log(tee);
    return (
        <main className="py-8">
            <div className="bg-white p-8 min-h-screen">
                <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        Weight (kg)
                    </Typography>
                    <TextField
                        value={weight}
                        onChange={handleWeightChange}
                        label="Weight"
                        type="number"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Typography variant="body1">Current Weight: {weight} kg</Typography>

                    <Typography variant="h6" gutterBottom>
                        Height (cm)
                    </Typography>
                    <TextField
                        value={height}
                        onChange={handleHeightChange}
                        label="Height"
                        type="number"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Typography variant="body1">Current Height: {height} cm</Typography>

                    <Typography variant="h6" gutterBottom>
                        Age (years)
                    </Typography>
                    <TextField
                        value={age}
                        onChange={handleAgeChange}
                        label="Age"
                        type="number"
                        fullWidth
                        variant="outlined"
                        margin="normal"
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