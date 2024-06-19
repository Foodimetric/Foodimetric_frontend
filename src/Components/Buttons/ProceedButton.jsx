import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Styled component using MUI's styling
const StyledButton = styled(Button)(({ theme, customcolor, width }) => ({
    backgroundColor: customcolor,
    color: theme.palette.common.white,
    width: width || '100%', // Set default width to 100% or use the provided width
    '&:hover': {
        backgroundColor: customcolor, // Maintain the same color on hover for simplicity
        opacity: 0.9, // Slightly change opacity on hover
    },
}));

const ProceedButton = ({ color, type, auth, onClick, width }) => {
    return (
        <StyledButton
            variant="contained"
            type={type}
            customcolor={color}
            disabled={auth === 'unauthorized'}
            onClick={onClick}
            width={width}
        >
            {auth === 'unauthorized' ? 'Login Required' : 'Proceed'}
        </StyledButton>
    );
};

export default ProceedButton;
