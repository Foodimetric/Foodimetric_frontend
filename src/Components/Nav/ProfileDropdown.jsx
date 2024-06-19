import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const ProfileDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick}>
                <Avatar alt="Profile Image" src="/path/to/profile.jpg" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                style={{ width: '500px' }}
            >
                <MenuItem onClick={handleClose}>Search</MenuItem>
                <MenuItem onClick={handleClose}>Anthro</MenuItem>
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default ProfileDropdown;
