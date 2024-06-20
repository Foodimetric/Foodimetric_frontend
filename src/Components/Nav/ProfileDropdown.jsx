import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useLocation } from 'react-router-dom';

const useStyles = styled((theme) => ({
    menu: {
        marginTop: theme.spacing(2), // Adds some space below the icon button
        width: '300px', // Increased width
    },
    menuItem: {
        fontSize: '1rem', // Larger font size
        padding: theme.spacing(2), // More padding
    },
    iconButton: {
        marginRight: theme.spacing(2), // Some margin for better spacing
    },
}));

const ProfileDropdown = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const location = useLocation();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isSearchPage = location.pathname.startsWith('/search');
    const isAnthroPage = location.pathname.startsWith('/anthro');

    return (
        <div>
            <IconButton className={classes.iconButton} onClick={handleClick}>
                <Avatar alt="Profile Image" src="/path/to/profile.jpg" />
            </IconButton>
            <Menu
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
                classes={{ paper: classes.menu }}
            >
                {isSearchPage && <MenuItem onClick={handleClose} className={classes.menuItem}><NavLink to={'/anthro/BMI'}>Anthro</NavLink></MenuItem>}
                {isAnthroPage && <MenuItem onClick={handleClose} className={classes.menuItem}><NavLink to={'/search/food'}>Search</NavLink></MenuItem>}
                <MenuItem onClick={handleClose} className={classes.menuItem}><NavLink to={'/dashboard'}>Dashboard</NavLink></MenuItem>
                <MenuItem onClick={handleClose} className={classes.menuItem}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default ProfileDropdown;
