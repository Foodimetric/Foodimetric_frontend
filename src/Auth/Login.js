import { useState } from 'react';
import login from "../assets/login.png";
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FOODIMETRIC_HOST_URL } from '../utils/getData';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        toast.promise(
            new Promise(async (resolve, reject) => {
                try {
                    const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/sign-in`, {
                        method: "POST",
                        body: JSON.stringify({ email, password }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    const data = await response.json();
                    localStorage.setItem("foodie-user", JSON.stringify(data?.payload));
                    localStorage.setItem("Foodie-token", JSON.stringify(data?.payload?.token));

                    if (response.ok) {
                        navigate('/search');
                        resolve();
                    } else {
                        setError("Invalid email or password.");
                        reject();
                    }
                } catch (error) {
                    console.error("Error during login:", error);
                    reject();
                }
            }),
            {
                loading: 'Loading',
                success: `Login successful`,
                error: `Error during login`,
            },
            {
                style: {
                    fontSize: '0.8rem',
                },
                success: {
                    duration: 5000,
                    icon: '✔',
                },
            }
        );
    }


    return (
        <div className="login-page">
            <div className='login-content'>
                <h2>Welcome back</h2>
                <p>{"(Login into your account)"}</p>
                <div className="login-form">
                    <form method='POST' onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group password-icon">
                            <label htmlFor="password">Password</label>
                            <input
                                 type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {password && <div className="icons8-eye" onClick={()=>setPasswordVisible(!passwordVisible)}></div>}
                        </div>
                        {error && <span className="error">{error}</span>}
                        <button type="submit" className='create_acct'>Login</button>
                        <p>New here? <Link to={"/signup"} style={{ textDecoration: 'none', color: 'rgba(255, 186, 8, 1)' }}>Register</Link></p>
                    </form>
                </div>
            </div>
            <div className="image-container">
                <img src={login} alt="Login" />
            </div>
        </div>
    );
};

export default Login;
