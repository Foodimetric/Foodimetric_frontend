import React from 'react';
import login from "../assets/login.png"
import './Auth.css'
import { Form, redirect } from 'react-router-dom';
import { validateForm } from '../utils/validate';

export function loginLoader (){
    return "login"
  
  }
const Login = () => {
    return (
        <div className="login-page">
            <div className='login-content'>
                <h2>Welcome back</h2>
                <p>{"(Login into your account)"}</p>
                <div className="login-form">
                    <Form method='POST'>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit" className='create_acct'>Login</button>
                    </Form>
                </div>
            </div>
            <div className="image-container">
                <img src={login} alt="Login" />
            </div>
        </div>
    );
};

export default Login;

export async function loginAction({request}){
    const userData = await request.formData();
    const loginData = {
      email: userData.get('email'),
      password: userData.get('password'),
    }
    const {isValid} = validateForm(loginData.email, loginData.password);
    if (isValid) {
      return redirect("/search")
    }
  }
