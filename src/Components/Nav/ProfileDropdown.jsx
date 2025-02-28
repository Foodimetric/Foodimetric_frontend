import React, { useState } from 'react';
import { Menu, MenuItem, Avatar, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { FiLogOut, FiUser, FiHome, FiSearch, FiBook, FiSettings, FiClock } from 'react-icons/fi';
import { AccountCircle } from '@mui/icons-material';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';

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
    const isdashboard = location.pathname.startsWith('/dashboard');

    // console.log(user);

    return (
        <div>
            {!isdashboard && <ProfileMenu onClick={handleClick}>
                <Avatar alt={user?.firstName && user?.lastName
                    ? `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
                    : 'Guest'} src={`${FOODIMETRIC_HOST_URL}${user?.profilePicture}`}
                    sx={{ fontFamily: 'Itim, cursive' }}
                />
            </ProfileMenu>}
            {isdashboard &&
                <Avatar
                    src={`${FOODIMETRIC_HOST_URL}${user?.profilePicture}`}
                    onClick={handleClick}
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#F78914",
                        color: "white",
                        cursor: "pointer",
                    }}
                    sx={{ fontFamily: 'Itim, cursive' }}
                >
                    <AccountCircle />
                </Avatar>
            }
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
                    <StyledNavLink to={isdashboard ? '/' : "/dashboard"} onClick={handleClose} sx={{ fontFamily: 'Outfit, serif' }}>
                        <FiHome size={20} />
                        {isdashboard ? 'Home' : 'Dashboard'}
                    </StyledNavLink>
                </StyledMenuItem>
                {isdashboard && (
                    <>
                        <StyledMenuItem>
                            <StyledNavLink to="/dashboard/history" onClick={handleClose} sx={{ fontFamily: 'Outfit, serif' }}>
                                <FiClock size={20} />
                                History
                            </StyledNavLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledNavLink to="/dashboard/diary" onClick={handleClose} sx={{ fontFamily: 'Outfit, serif' }}>
                                <FiBook size={20} />
                                Diary
                            </StyledNavLink>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <StyledNavLink to="/dashboard/setting" onClick={handleClose} sx={{ fontFamily: 'Outfit, serif' }}>
                                <FiSettings size={20} />
                                Settings
                            </StyledNavLink>
                        </StyledMenuItem>
                    </>
                )}
                {!isAnthroPage && (
                    <StyledMenuItem>
                        <StyledNavLink to="/anthro/BMI" onClick={handleClose} sx={{ fontFamily: 'Outfit, serif' }}>
                            <FiUser size={20} />
                            Anthropometric Data
                        </StyledNavLink>
                    </StyledMenuItem>
                )}
                {!isSearchPage && (
                    <StyledMenuItem>
                        <StyledNavLink to="/search/food" onClick={handleClose} sx={{ fontFamily: 'Outfit, serif' }}>
                            <FiSearch size={20} />
                            Search Food
                        </StyledNavLink>
                    </StyledMenuItem>
                )}
                <Divider />
                <StyledMenuItem onClick={logout} sx={{ fontFamily: 'Outfit, serif' }}>
                    <FiLogOut size={20} />
                    Logout
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
};

export default ProfileDropdown;
