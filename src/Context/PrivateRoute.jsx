import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../Pages/User/DashboardLayout';
// import { useAuth } from './AuthContext';

const PrivateRoute = () => {
    const is_Authenticated = localStorage.getItem("isAuth") === "true";
    // const { is_Authenticated } = useAuth();
    console.log("are we really auth", is_Authenticated);
    return is_Authenticated ? <DashboardLayout /> : <Navigate to="/login" />;
};

export default PrivateRoute;
