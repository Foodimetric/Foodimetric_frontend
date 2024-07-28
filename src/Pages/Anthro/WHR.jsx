import React, { useState } from 'react';
import { TextField, Box, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProceedButton from '../../Components/Buttons/ProceedButton';

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
    };

    const handleProceed = () => {
        calculateWHR();
        alert('Proceed button clicked');
    };

    console.log(whr);
    return (
        <main className="py-8">
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
