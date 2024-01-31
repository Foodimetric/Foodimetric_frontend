import React, { useState } from 'react';
import './Auth.css';
import signup from '../assets/about_us.png'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FOODIMETRIC_HOST_URL } from '../utils/getData';
import { toast } from 'react-hot-toast';


const SignupPage = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value.trim() }));
    };


    const validateData = (data) => {
        let errors = {};
        const regex = /^[a-zA-Z0-9]+$/; // regex for alphanumeric characters
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // regex for email
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{8,}$/; // regex for password

        if (!regex.test(data.firstName)) {
            errors.firstName = 'First name should not include special characters';
        }

        if (!regex.test(data.lastName)) {
            errors.lastName = 'Last name should not include special characters';
        }

        if (!emailRegex.test(data.email)) {
            errors.email = 'Email is not valid';
        }

        console.log(passwordRegex.test(data.password));
        if (!passwordRegex.test(data.password)) {
            errors.password = 'Password should include at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateData(userData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            saveUser();
        }
    };

    async function saveUser() {
        toast.promise(
            new Promise(async (resolve, reject) => {
                try {
                    const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/sign-up`, {
                        method: "POST",
                        body: JSON.stringify(userData),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    const data = await response.json();
                    if (response.ok) {
                        navigate('/login');
                        resolve(data); // Resolve the Promise with data for success
                    } else {
                        const errorData = await response.json();
                        console.error("Registration failed:", errorData.message);
                        reject(new Error("Registration failed")); // Reject the Promise with error for failure
                    }
                } catch (error) {
                    reject(error); // Reject the Promise with error for failure
                }
            }),
            {
                loading: 'Loading',
                success: `Registration successful`,
                error: `Error registering user`,
            },
            {
                style: {
                    fontSize: '0.8rem',
                },
                success: {
                    duration: 5000,
                    icon: '🔥',
                },
            }
        );
    }




    return (
        <>
            <div className="signup-container">
                <div className="signup-content">
                    <h2>Create an <span id='account'>Account</span></h2>
                    <p>{"(Sign up for a free account here)"}</p>
                    <form method='POST' onSubmit={handleSubmit}>
                        <div id='name'>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text"
                                    id="fullName"
                                    placeholder="Enter your first name"
                                    name='firstName'
                                    maxLength={35}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <span className="error">{errors.firstName}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text"
                                    id="lastName"
                                    placeholder="Enter your Last name"
                                    name='lastName'
                                    maxLength={35}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <span className="error">{errors.lastName}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email"
                                id="email"
                                placeholder="Enter your email address"
                                maxLength={35}
                                name='email'
                                onChange={handleChange}
                                required

                            />
                        </div>
                        {errors.email && <span className="error">{errors.email}</span>}
                        <div className="form-group password-icon">
                            <label htmlFor="password">Password</label>
                            <input
                               type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
                                maxLength={20}
                                name='password'
                                onChange={handleChange}
                                required
                            />
                            {userData.password && <div className="icons8-eye" onClick={()=>setPasswordVisible(!passwordVisible)}></div>}

                        </div>
                        {errors.password && <span className="error">{errors.password}</span>}
                        <button type="submit" className='create_acct'>Create Account</button>
                        <p>Already have an account? <Link to={"/login"} style={{ textDecoration: 'none', color: 'rgba(255, 186, 8, 1)' }}>Login</Link></p>
                    </form>
                </div>
                <div className="signup-image">
                    <img src={signup} alt="Signup" />
                </div>
            </div>
        </>
    );
};

export default SignupPage;