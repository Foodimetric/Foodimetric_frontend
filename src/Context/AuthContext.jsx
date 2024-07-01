import React, { createContext, useState, useEffect, useContext } from 'react';
import { FOODIMETRIC_HOST_URL } from '../Utils/host'
const AuthContext = createContext({
    isAuthenticated: false,
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
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rememberMe) {
            localStorage.setItem('rememberMeEmail', email);
        } else {
            localStorage.removeItem('rememberMeEmail');
        }

        // Making a request to the login endpoint
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/sign-in`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            if (response.ok) {
                const user = {
                    _id: data.payload.user._id,
                    email: data.payload.user.email,
                    firstName: data.payload.user.firstName,
                    lastName: data.payload.user.lastName,
                }
                setIsAuthenticated(true);
                login(data.payload.token, user);
            } else {
                console.error('Login failed:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const register = async (e) => {
        e.preventDefault();
        const newErrors = validateData(formValues);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/sign-up`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });
                const data = await response.json();
                if (response.ok) {
                    register(data.payload.token, data.payload.user);
                } else {
                    console.error('Registration failed:', data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
            setIsAuthenticated(true);
        }
    }, []);
    return (
        <AuthContext.Provider value={{ isAuthenticated, email, password, rememberMe, formValues, login, logout, register, handleSubmit, setEmail, setPassword, setRememberMe, setFormValues, handleChange }}>
            {children}
        </AuthContext.Provider>
    );
};
