import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DashboardLayout from "../Pages/User/DashboardLayout";
import { useAuth } from "./AuthContext";

const PrivateRoute = () => {
    const { setIsAuthenticated, login } = useAuth();
    const navigate = useNavigate();
    const [checkingAuth, setCheckingAuth] = useState(true);  // ✅ NEW: Track initial authentication check

    useEffect(() => {
        // ✅ Check if redirected from Google login
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        const user = urlParams.get("user");

        if (token && user) {
            const parsedUser = JSON.parse(decodeURIComponent(user));

            // ✅ Store authentication details
            setIsAuthenticated(true);
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("googleUser", "true");
            localStorage.setItem("user", JSON.stringify(parsedUser));
            sessionStorage.setItem("user", JSON.stringify(parsedUser));

            // ✅ Authenticate the user
            login(token, parsedUser);

            // ✅ Redirect based on user category
            navigate(parsedUser.category === 0 ? "/educate" : "/dashboard", { replace: true });
        } else {
            setCheckingAuth(false);  // ✅ Finished checking, allow rendering
        }
    }, [login, navigate, setIsAuthenticated]);

    const is_Authenticated = localStorage.getItem("isAuth") === "true";

    // ✅ Show a loading state while checking authentication
    if (checkingAuth) return <div className="preloader">
        <div className="vertical-centered-box">
            <div className="content">
                <div className="loader-circle"></div>
                <div className="loader-line-mask">
                    <div className="loader-line"></div>
                </div>
                <img src="assets/images/logo.png" alt="" />
            </div>
        </div>
    </div>;

    return is_Authenticated ? <DashboardLayout /> : <Navigate to="/login" />;
};

export default PrivateRoute;
