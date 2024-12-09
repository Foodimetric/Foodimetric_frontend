import React, { createContext, useState, useEffect, useContext } from 'react';
import showToast from '../Utils/toast'
import { FOODIMETRIC_HOST_URL } from '../Utils/host'
const AuthContext = createContext({
    isAuthenticated: false,
    errors: {},
    login: () => { },
    logout: () => { },
    register: () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [errors, setErrors] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        category: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validateData = (data) => {
        let errors = {};
        const regex = /^[a-zA-Z0-9]+$/; // regex for alphanumeric characters
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // regex for email
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!regex.test(data.firstName)) {
            errors.firstName = 'First name should not include special characters';
        }

        if (!regex.test(data.lastName)) {
            errors.lastName = 'Last name should not include special characters';
        }

        if (!emailRegex.test(data.email)) {
            errors.email = 'Email is not valid';
        }

        if (!passwordRegex.test(data.password)) {
            errors.password = 'Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one number.';
        }
        return errors;
    };

    const login = (token, user) => {
        setToken(token);
        setUser(user);
    };


    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token'); // Clearing token from localStorage
        sessionStorage.removeItem('user'); // Clearing user from sessionStorage
        sessionStorage.removeItem('token'); // Clearing token from sessionStorage
        setIsAuthenticated(false);
    };


    // working
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Making a request to the login endpoint
    //     try {
    //         const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/sign-in`, {
    //             method: "POST",
    //             body: JSON.stringify({ email, password }),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         const data = await response.json();

    //         if (response.ok) {
    //             setIsAuthenticated(true);
    //             const user = {
    //                 _id: data.payload.user._id,
    //                 email: data.payload.user.email,
    //                 firstName: data.payload.user.firstName,
    //                 lastName: data.payload.user.lastName,
    //                 token: data.payload.token,
    //                 category: data.payload.user.category
    //             }
    //             if (rememberMe) {
    //                 localStorage.setItem("user", JSON.stringify(user));
    //                 login(data.payload.token, user);
    //             } else {
    //                 sessionStorage.setItem("user", JSON.stringify(user));
    //             }

    //             if (user.category === 0) {
    //                 // Route to Educate page
    //                 window.location.href = '/educate';
    //             } else {
    //                 // Route to Dashboard
    //                 window.location.href = '/dashboard';
    //             }
    //         } else {
    //             console.error('Login failed:', data);
    //             showToast('error', `${data.message}`);
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    // working

    const register = async (e) => {
        e.preventDefault();
        const newErrors = validateData(formValues);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const adjustedFormValues = {
                ...formValues,
                category: formValues.category === "others" ? 0 : 1,
            };

            try {
                const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/sign-up`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(adjustedFormValues),
                });
                const data = await response.json();

                if (response.ok) {
                    showToast('success', 'Registration successful!, Check your email for verification.');
                } else {
                    showToast('error', `Registration failed: ${data.message}`);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    useEffect(() => {
        const savedUser =
            localStorage.getItem('user') || sessionStorage.getItem('user');
        if (savedUser) {
            setToken(savedUser?.token);
            setUser(JSON.parse(savedUser));
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuthenticated, email, password, rememberMe, formValues, errors, user, login, logout, register, setEmail, setPassword, setIsAuthenticated, setRememberMe, setFormValues, handleChange
        }}>
            {children}
        </AuthContext.Provider>
    );
};
