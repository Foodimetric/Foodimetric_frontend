import React, { useState } from 'react';
import { Menu, MenuItem, Avatar, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { FiLogOut, FiUser, FiHome, FiSearch } from 'react-icons/fi';

const ProfileMenu = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
});

const StyledMenu = styled(Menu)({
    marginTop: '8px',
    '& .MuiMenu-paper': {
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        minWidth: '250px',
    },
});

const StyledMenuItem = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    gap: '10px',
    '&:hover': {
        backgroundColor: '#f5f5f5',
    },
});

const StyledNavLink = styled(NavLink)({
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
});

const ProfileDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { user, logout } = useAuth();
    const location = useLocation();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isSearchPage = location.pathname.startsWith('/search');
    const isAnthroPage = location.pathname.startsWith('/anthro');

    console.log(user);

    return (
        <div>
            <ProfileMenu onClick={handleClick}>
                <Avatar alt={user?.firstName && user?.lastName
                    ? `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
                    : 'Guest'} src="/path/to/profile.jpg" />
            </ProfileMenu>
            <StyledMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <StyledMenuItem>
                    <StyledNavLink to="/dashboard" onClick={handleClose}>
                        <FiHome size={20} />
                        Dashboard
                    </StyledNavLink>
                </StyledMenuItem>
                {isSearchPage && (
                    <StyledMenuItem>
                        <StyledNavLink to="/anthro/BMI" onClick={handleClose}>
                            <FiUser size={20} />
                            Anthropometric Data
                        </StyledNavLink>
                    </StyledMenuItem>
                )}
                {isAnthroPage && (
                    <StyledMenuItem>
                        <StyledNavLink to="/search/food" onClick={handleClose}>
                            <FiSearch size={20} />
                            Search Food
                        </StyledNavLink>
                    </StyledMenuItem>
                )}
                <Divider />
                <StyledMenuItem onClick={logout}>
                    <FiLogOut size={20} />
                    Logout
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
};

export default ProfileDropdown;
