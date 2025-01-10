import React, { useState } from 'react';
import { TextField, Box, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProceedButton from '../../Components/Buttons/ProceedButton';
import { useAuth } from '../../Context/AuthContext';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';

// Custom styled TextField
const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#3a8589',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#3a8589',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#3a8589',
        },
        '&:hover fieldset': {
            borderColor: '#3a8589',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#3a8589',
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

const BMR = () => {
    const { user } = useAuth();
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmr, setBmr] = useState(null);

    const handleWeightChange = (e) => setWeight(e.target.value);
    const handleHeightChange = (e) => setHeight(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);

    const calculateBMR = () => {
        // Use the Revised Harris-Benedict Equation
        let bmrValue;
        if (gender === 'male') {
            bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        setBmr(bmrValue);
        return bmrValue;
    };

    const handleProceed = async () => {
        const computedBmr = calculateBMR();

        // Prepare calculation payload
        const calculationPayload = {
            user_id: user._id, // Replace `user._id` with the actual user ID from your app's context or state
            calculator_name: "BMR",
            parameters: {
                weight: `${weight} kg`,
                height: `${height} cm`,
                age: age,
                gender: gender,
            },
            result: `${computedBmr} calories/day`,
            calculation_details: "BMR calculated using the Revised Harris-Benedict Equation",
        };

        // Send the BMR calculation to the backend
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/calculations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(calculationPayload),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Calculation saved successfully:", data);
        } catch (error) {
            console.error("Error saving calculation:", error.message);
        }
    };

    return (
        <main className="py-8">
            <div className="bg-white p-8 min-h-screen">
                <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center' }}>
                    <CustomTextField
                        label="Weight (kg)"
                        type="number"
                        value={weight}
                        onChange={handleWeightChange}
                        fullWidth
                        margin="normal"
                    />
                    <CustomTextField
                        label="Height (cm)"
                        type="number"
                        value={height}
                        onChange={handleHeightChange}
                        fullWidth
                        margin="normal"
                    />
                    <CustomTextField
                        label="Age (years)"
                        type="number"
                        value={age}
                        onChange={handleAgeChange}
                        fullWidth
                        margin="normal"
                    />
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
                    {bmr !== null && (
                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Your BMR is: {bmr.toFixed(2)} calories/day
                        </Typography>
                    )}
                </Box>
            </div>
        </main>
    );
};

export default BMR;
