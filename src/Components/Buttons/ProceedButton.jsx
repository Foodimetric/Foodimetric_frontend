import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

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

const ProceedButton = ({ color, onClick, width, disabled }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleClick = async (e, func) => {
        e.preventDefault();
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        setLoading(true); // Start loading

        try {
            await func(); // Execute the provided function
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false); // Stop loading after action completes
        }
    };

    return (
        <StyledButton
            variant="contained"
            type="submit"
            sx={{ fontFamily: 'Outfit, serif' }}
            customcolor={color}
            onClick={(e) => handleClick(e, onClick)}
            width={width}
            disabled={loading} // Disable if loading or explicitly disabled
        >
            {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
            ) : (
                'Proceed'
            )}
        </StyledButton>
    );
};

export default ProceedButton;