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

const HeightAge = () => {
    const [height, setHeight] = useState(170);
    const [age, setAge] = useState(10);
    const [gender, setGender] = useState('male');
    const [result, setResult] = useState(null);

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleGenderChange = (e) => setGender(e.target.value);

    const calculateHeightForAge = () => {
        let isHealthy;
        // Example height-for-age ranges; in a real application, use medically accurate data.
        if (age <= 1) {
            isHealthy = height >= 50 && height <= 80;
        } else if (age <= 5) {
            isHealthy = height >= 80 && height <= 110;
        } else if (age <= 12) {
            isHealthy = height >= 110 && height <= 150;
        } else if (age <= 18) {
            isHealthy = height >= 150 && height <= 190;
        } else {
            isHealthy = height >= 160 && height <= 200;
        }
        setResult(isHealthy ? 'Within healthy range' : 'Outside healthy range');
    };

    const handleProceed = () => {
        calculateHeightForAge();
        alert('Proceed button clicked');
    };

    return (
        <main className="py-8">
            <div className="bg-white p-8 min-h-screen">
                <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center' }}>

                    <Typography variant="h6" gutterBottom>
                        Height (cm)
                    </Typography>
                    <TextField
                        type="number"
                        value={height}
                        onChange={handleHeightChange}
                        label="Height (cm)"
                        fullWidth
                        variant="outlined"
                        inputProps={{ min: 30, max: 250 }}
                    />
                    <Typography variant="body1">Current Height: {height} cm</Typography>

                    <Typography variant="h6" gutterBottom>
                        Age (years)
                    </Typography>
                    <TextField
                        type="number"
                        value={age}
                        onChange={handleAgeChange}
                        label="Age (years)"
                        fullWidth
                        variant="outlined"
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
                            Your height is: {result}
                        </Typography>
                    )}
                </Box>
            </div>
        </main>
    );
};

export default HeightAge;
