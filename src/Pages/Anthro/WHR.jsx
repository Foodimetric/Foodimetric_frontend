import React, { useState } from 'react';
import { TextField, Box, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProceedButton from '../../Components/Buttons/ProceedButton';
import { useAuth } from '../../Context/AuthContext';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';
import { Helmet } from 'react-helmet-async';

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

const WHR = () => {
    const { user } = useAuth()
    const [waist, setWaist] = useState('');
    const [hip, setHip] = useState('');
    const [gender, setGender] = useState('male');
    const [whr, setWhr] = useState(null);

    const handleWaistChange = (e) => setWaist(e.target.value);
    const handleHipChange = (e) => setHip(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);

    const calculateWHR = () => {
        const whrValue = (waist / hip).toFixed(2);
        setWhr(whrValue);
        return whrValue
    };

    const handleProceed = async () => {
        const whr_value = calculateWHR(); // Calculate WHR

        // Ensure WHR is calculated before sending data
        if (!whr_value) return;

        const calculationPayload = {
            user_id: user._id, // Replace `user._id` with the actual user ID
            calculator_name: "WHR",
            parameters: {
                waist: `${waist} cm`,
                hip: `${hip} cm`,
                gender: gender,
            },
            result: whr_value,
            calculation_details: "WHR calculated using waist and hip circumferences in cm",
        };

        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/calculations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`, // Replace with the actual token
                },
                body: JSON.stringify(calculationPayload),
            });

            if (response.ok) {
                await response.json();
                // console.log("Calculation saved:", data);
            } else {
                const error = await response.json();
                console.error("Failed to save calculation:", error);
            }
        } catch (err) {
            console.error("Error saving calculation:", err);
        }
    };



    return (
        <main className="py-8">
            <Helmet>
                <title>Waist-to-Hip Ratio (WHR) Calculator - Health Risk Insights</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <div className="bg-white p-8 min-h-screen">
                <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center' }}>
                    <CustomTextField
                        label="Waist (cm)"
                        type="number"
                        value={waist}
                        onChange={handleWaistChange}
                        fullWidth
                        margin="normal"
                    />
                    <CustomTextField
                        label="Hip (cm)"
                        type="number"
                        value={hip}
                        onChange={handleHipChange}
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
                    {whr !== null && (
                        <Typography variant="h6" sx={{ mt: 4 }}>
                            Your Waist-to-Hip Ratio is: {whr}
                        </Typography>
                    )}
                </Box>
            </div>
        </main>
    );
};

export default WHR;
