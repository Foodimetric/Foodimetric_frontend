import React, { useState } from 'react';
import './Auth.css';
import signup from '../assets/about_us.png'
import { Form, Link, redirect} from 'react-router-dom';
import Footer from '../components/Footer'
import { validateForm } from '../utils/validate';

export function signupLoader() {
    return "sowonoye"

}
const SignupPage = () => {
    const [errors, setErrors] = useState({});
    return (
        <>
            <div className="signup-container">
                <div className="signup-content">
                    <h2>Create an <span id='account'>Account</span></h2>
                    <p>{"(Sign up for a free account here)"}</p>
                    <Form method='POST'>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text"
                                id="fullName"
                                placeholder="Enter your full name"
                                name='userName'
                                maxLength={35}
                                // onChange={handleChange}
                            />
                        </div>
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email"
                                id="email"
                                placeholder="Enter your email address"
                                maxLength={35}
                                // onChange={handleChange}
                                name='email'

                            />
                        </div>
                        {errors.email && <span className="error">{errors.email}</span>}
                        <div className="form-group">
                            <label htmlFor="passwrd">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                maxLength={20}
                                // onChange={handleChange}
                                name='password'
                            />
                        </div>
                        {errors.password && <span className="error">{errors.password}</span>}
                        <button type="submit" className='create_acct'>Create Account</button>
                        <p>Already have an account? <Link to={"/login"} style={{ textDecoration: 'none', color: 'rgba(255, 186, 8, 1)' }}>Login</Link></p>
                    </Form>
                </div>
                <div className="signup-image">
                    <img src={signup} alt="Signup" />
                </div>
            </div>
        </>
    );
};

export default SignupPage;

export async function signupAction({request}){
  const data = await request.formData();
  const signup_data = {
    email: data.get('email'),
    password: data.get('password'),
    name: data.get('userName'),
  }
  const {isValid} = validateForm(signup_data.email, signup_data.password,signup_data.name, "signup");
  if (isValid) {
    return redirect("/search")
  }
}