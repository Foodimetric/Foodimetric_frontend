import React, { useState } from 'react';
import {
    Box,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    TextField
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ProceedButton from '../../Components/Buttons/ProceedButton';
import { useAuth } from '../../Context/AuthContext';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';

// Custom styled Radio
const CustomRadio = styled(Radio)({
    color: '#3a8589',
    '&.Mui-checked': {
        color: '#3a8589',
    },
});

const IBW = () => {
    const { user } = useAuth()
    const [height, setHeight] = useState('170');
    const [gender, setGender] = useState('male');
    const [ibw, setIbw] = useState(null);

    // ✅ Correctly handle user input from a TextField
    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleGenderChange = (e) => setGender(e.target.value);

    const calculateIBW = () => {
        // Convert height to a number before calculation
        const numericHeight = parseFloat(height);

        let ibwValue;
        if (gender === 'male') {
            ibwValue = 50 + 0.91 * (numericHeight - 152.4);
        } else {
            ibwValue = 45.5 + 0.91 * (numericHeight - 152.4);
        }
        setIbw(ibwValue);
        return ibwValue
    };

    const handleProceed = async () => {
        const ibw_value = calculateIBW(); // Calculate IBW

        // Ensure IBW is calculated before sending data
        if (!ibw_value) return;

        const calculationPayload = {
            user_id: user._id, // Replace `user._id` with the actual user ID
            calculator_name: "IBW",
            parameters: {
                height: `${height} cm`,
                gender: gender,
            },
            result: `${ibw_value} kg`,
            calculation_details: "IBW calculated using Devine formula with height in cm and gender",
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
                const data = await response.json();
                console.log("Calculation saved:", data);
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
            <div className="bg-white p-8 min-h-screen">
                <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4, textAlign: 'center' }}>

                    {/* Height Input */}
                    <Typography variant="h6" gutterBottom>
                        Height (cm)
                    </Typography>
                    <TextField
                        type="number"
                        value={height}
                        onChange={handleHeightChange}
                        inputProps={{ min: 105, max: 400, step: 1 }}
                        sx={{ width: '100%', mt: 2 }}
                    />
                    <Typography variant="body1">Current Height: {height} cm</Typography>

                    {/* Gender Selection */}
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

                    {/* Calculate and Show Result */}
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
