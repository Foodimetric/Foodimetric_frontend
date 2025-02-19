import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormLabel, TextField } from '@mui/material';
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

const EE = () => {
    const { user } = useAuth();
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

    const handleActivityLevelChange = (e) => setActivityLevel(parseFloat(e.target.value));

    const calculateTEE = () => {
        let bmr;
        // const heightInMeters = height / 100;

        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // Calculate TEE
        const teeValue = bmr * activityLevel;
        setTee(teeValue);
    };

    const handleProceed = async () => {
        calculateTEE(); // Calculate TEE

        if (tee === null) return; // Ensure TEE is calculated before sending data

        const calculationPayload = {
            user_id: user._id, // Replace `user._id` with the actual user ID
            calculator_name: "EE",
            parameters: {
                weight: `${weight} kg`,
                height: `${height} cm`,
                age: `${age} years`,
                gender: gender,
                activity_level: activityLevel,
            },
            result: `${tee.toFixed(2)} kcal/day`,
            calculation_details: "TEE calculated using the Harris-Benedict formula adjusted for activity level",
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
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Itim, cursive' }}>
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
                    <Typography variant="body1" sx={{ fontFamily: 'Outfit, serif' }}
                    >Current Weight: {weight} kg</Typography>

                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Itim, cursive' }}>
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
                    <Typography variant="body1" sx={{ fontFamily: 'Outfit, serif' }}
                    >Current Height: {height} cm</Typography>

                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Itim, cursive' }}>
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
                    <Typography variant="body1" sx={{ fontFamily: 'Outfit, serif' }}
                    >Current Age: {age} years</Typography>

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
                        <FormLabel component="legend" sx={{ fontFamily: 'Itim, cursive' }}>Activity Level</FormLabel>
                        <RadioGroup
                            row
                            value={activityLevel}
                            onChange={handleActivityLevelChange}
                            aria-label="activity level"
                            name="activity level"
                        >
                            <FormControlLabel value={1.2} control={<CustomRadio />} label="Sedentary" sx={{ fontFamily: 'Outfit, serif' }} />
                            <FormControlLabel value={1.375} control={<CustomRadio />} label="Lightly Active" sx={{ fontFamily: 'Outfit, serif' }} />
                            <FormControlLabel value={1.55} control={<CustomRadio />} label="Moderately Active" sx={{ fontFamily: 'Outfit, serif' }} />
                            <FormControlLabel value={1.725} control={<CustomRadio />} label="Very Active" sx={{ fontFamily: 'Outfit, serif' }} />
                            <FormControlLabel value={1.9} control={<CustomRadio />} label="Extra Active" sx={{ fontFamily: 'Outfit, serif' }} />
                        </RadioGroup>
                    </Box>

                    <ProceedButton color="#ffba08" type="button" auth="authorized" onClick={handleProceed} />

                    {tee !== null && (
                        <div>
                            <Typography variant="h6" sx={{ mt: 4, fontFamily: 'Itim, cursive' }}>
                                Your Total Energy Expenditure is: {tee.toFixed(2)} kcal/day
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: '1rem', color: 'gray', fontFamily: 'Outfit, serif' }}>
                                BMR Formula Used:
                            </Typography>
                            <Typography sx={{ mt: 1, fontStyle: 'italic', color: '#555', fontFamily: 'Outfit, serif' }}>
                                Mifflin-St Jeor Equation
                            </Typography>
                        </div>
                    )}
                </Box>
            </div>
        </main>
    );
};

export default EE;
