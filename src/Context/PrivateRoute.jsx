import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../Pages/User/DashboardLayout';
import { useAuth } from './AuthContext';

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />;
};

export default PrivateRoute;
