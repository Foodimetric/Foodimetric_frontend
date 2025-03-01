import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import DashboardLayout from '../Pages/User/DashboardLayout';
import { useAuth } from './AuthContext';

const PrivateRoute = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated, login } = useAuth();

    useEffect(() => {
        // Check if redirected from Google login
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        const user = urlParams.get("user");

        if (token && user) {
            const parsedUser = JSON.parse(decodeURIComponent(user));

            // ✅ Store in localStorage
            setIsAuthenticated(true);
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("user", JSON.stringify(parsedUser));
            sessionStorage.setItem("user", JSON.stringify(parsedUser));
            // ✅ Set authentication state
            login(token, parsedUser);

            // ✅ Redirect user based on category
            navigate(parsedUser.category === 0 ? "/educate" : "/dashboard");
        }
    }, [login, navigate, setIsAuthenticated]);

    const is_Authenticated = localStorage.getItem("isAuth") === "true";
    // const { is_Authenticated } = useAuth();
    // console.log("are we really auth", is_Authenticated);
    return is_Authenticated ? <DashboardLayout /> : <Navigate to="/login" />;
};

export default PrivateRoute;
