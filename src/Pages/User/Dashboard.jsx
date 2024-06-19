import React, { useState } from 'react';
import {
    DashboardBar, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem, Drawer, List, ListItem, ListItemIcon, ListItemText,
    CssBaseline, Box, Container, Grid, Paper, InputBase, Badge,
    AppBar
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Chart from "react-apexcharts";

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function Dashboard() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [notificationEl, setNotificationEl] = useState(null);
    const [profileEl, setProfileEl] = useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationMenu = (event) => {
        setNotificationEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setNotificationEl(null);
    };

    const handleProfileMenu = (event) => {
        setProfileEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setProfileEl(null);
    };

    const drawer = (
        <div>
            <div style={{ padding: 16, backgroundColor: '#374151' }}>
                <Avatar alt="Profile Image" src="https://image.flaticon.com/icons/png/512/149/149071.png" />
                <Typography variant="h6" noWrap style={{ color: 'white' }}>
                    Safwan
                </Typography>
            </div>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Item" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show new notifications"
                            color="inherit"
                            onClick={handleNotificationMenu}
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={profileEl ? 'profile-menu' : undefined}
                            aria-haspopup="true"
                            onClick={handleProfileMenu}
                            color="inherit"
                        >
                            <Avatar alt="Profile Image" src="https://image.flaticon.com/icons/png/512/149/149071.png" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                <Chart
                                    options={{
                                        chart: {
                                            type: 'line',
                                            height: 350
                                        },
                                        stroke: {
                                            curve: 'smooth'
                                        },
                                        fill: {
                                            type: 'solid',
                                            opacity: [0.35, 1]
                                        },
                                        labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09', 'Dec 10', 'Dec 11'],
                                        markers: {
                                            size: 0
                                        },
                                        yaxis: [
                                            {
                                                title: {
                                                    text: 'Series A'
                                                }
                                            },
                                            {
                                                opposite: true,
                                                title: {
                                                    text: 'Series B'
                                                }
                                            }
                                        ],
                                        tooltip: {
                                            shared: true,
                                            intersect: false,
                                            y: {
                                                formatter: function (y) {
                                                    if (typeof y !== "undefined") {
                                                        return y.toFixed(0) + " points";
                                                    }
                                                    return y;
                                                }
                                            }
                                        }
                                    }}
                                    series={[
                                        {
                                            name: 'TEAM A',
                                            type: 'area',
                                            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
                                        },
                                        {
                                            name: 'TEAM B',
                                            type: 'line',
                                            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
                                        }
                                    ]}
                                    type="line"
                                    height={350}
                                />
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                <Chart
                                    options={{
                                        chart: {
                                            type: 'radialBar',
                                            height: 350
                                        },
                                        plotOptions: {
                                            radialBar: {
                                                dataLabels: {
                                                    name: {
                                                        fontSize: '22px'
                                                    },
                                                    value: {
                                                        fontSize: '16px'
                                                    },
                                                    total: {
                                                        show: true,
                                                        label: 'Total',
                                                        formatter: function (w) {
                                                            return 249;
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
                                    }}
                                    series={[44, 55, 67, 83]}
                                    type="radialBar"
                                    height={350}
                                />
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <div>
                                    <h1 className="font-bold text-base">Table</h1>
                                    <div className="mt-4">
                                        <div className="flex flex-col">
                                            <div className="-my-2 overflow-x-auto">
                                                <div className="py-2 align-middle inline-block min-w-full">
                                                    <div
                                                        className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead>
                                                                <tr>
                                                                    <th
                                                                        className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                        <div className="flex cursor-pointer">
                                                                            <span className="mr-2">PRODUCT NAME</span>
                                                                        </div>
                                                                    </th>
                                                                    <th
                                                                        className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                        <div className="flex cursor-pointer">
                                                                            <span className="mr-2">Stock</span>
                                                                        </div>
                                                                    </th>
                                                                    <th
                                                                        className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                        <div className="flex cursor-pointer">
                                                                            <span className="mr-2">STATUS</span>
                                                                        </div>
                                                                    </th>
                                                                    <th
                                                                        className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                                        <div className="flex cursor-pointer">
                                                                            <span className="mr-2">ACTION</span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white divide-y divide-gray-200">
                                                                <tr>
                                                                    <td
                                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                        <p>Apple MacBook Pro 13</p>
                                                                        <p className="text-xs text-gray-400">PC & Laptop
                                                                        </p>
                                                                    </td>
                                                                    <td
                                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                        <p>77</p>
                                                                    </td>
                                                                    <td
                                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                        <div className="flex text-green-500">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                className="w-5 h-5 mr-1" fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke="currentColor">
                                                                                <path strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="2"
                                                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                            </svg>
                                                                            <p>Active</p>
                                                                        </div>
                                                                    </td>
                                                                    <td
                                                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                        <div className="flex space-x-4">
                                                                            <a href="#" className="text-blue-500 hover:text-blue-600">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                    className="w-5 h-5 mr-1"
                                                                                    fill="none" viewBox="0 0 24 24"
                                                                                    stroke="currentColor">
                                                                                    <path strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth="2"
                                                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                                </svg>
                                                                                <p>Edit</p>
                                                                            </a>
                                                                            <a href="#" className="text-red-500 hover:text-red-600">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                    className="w-5 h-5 mr-1 ml-3"
                                                                                    fill="none" viewBox="0 0 24 24"
                                                                                    stroke="currentColor">
                                                                                    <path strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth="2"
                                                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                                </svg>
                                                                                <p>Delete</p>
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Search</MenuItem>
                <MenuItem onClick={handleClose}>Anthro</MenuItem>
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Menu
                id="notification-menu"
                anchorEl={notificationEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(notificationEl)}
                onClose={handleNotificationClose}
            >
                <MenuItem onClick={handleNotificationClose}>Messages (13)</MenuItem>
            </Menu>
            <Menu
                id="profile-menu"
                anchorEl={profileEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(profileEl)}
                onClose={handleProfileClose}
            >
                <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
            </Menu>
        </Box>
    );
}

export default Dashboard;
