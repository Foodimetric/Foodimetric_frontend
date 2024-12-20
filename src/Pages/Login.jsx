import React, { useEffect, useState } from 'react';
import HeaderLink from '../Components/Headers/HeaderLink';
import GoogleBtn from '../Components/Buttons/GoogleBtn';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { FOODIMETRIC_HOST_URL } from '../Utils/host';
import showToast from '../Utils/toast';

const Login = () => {
    const navigate = useNavigate()
    const { email, password, rememberMe, setEmail, setPassword, setRememberMe, setIsAuthenticated, login } = useAuth();

    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberMeEmail');
        if (rememberedEmail) {
            setEmail(rememberedEmail);
            setRememberMe(true);
        }
    }, [setEmail, setRememberMe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                setIsAuthenticated(true);
                const user = {
                    _id: data.payload.user._id,
                    email: data.payload.user.email,
                    firstName: data.payload.user.firstName,
                    lastName: data.payload.user.lastName,
                    token: data.payload.token,
                    category: data.payload.user.category
                }

                localStorage.setItem("user", JSON.stringify(user));
                login(data.payload.token, user);
                sessionStorage.setItem("user", JSON.stringify(user));

                if (data.payload.user.category === 0) {
                    // Route to Educate page
                    navigate('/educate');
                } else {
                    // Route to Dashboard
                    navigate('/dashboard');
                }
            } else {
                console.error('Login failed:', data);
                showToast('error', `${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main>
            <div className="page-wrapper">
                <HeaderLink />
                <div className="w-full overflow-hidden flex items-center min-h-[100vh] p-[50px_0]">
                    <div className="wraper">
                        <form className="md:w-[1170px] w-[600px] sm:w-[500px] col:w-full flex flex-wrap bg-white m-auto shadow-[0px_14px_60px_rgba(0,0,0,0.06)] rounded-[10px]
                             overflow-hidden" onSubmit={handleSubmit}>
                            <div className="md:w-1/2 w-full bg-[#1a384c] flex flex-col justify-between min-h-[600px] text-center p-[50px] col:p-[30px_10px] login">

                            </div>
                            <div
                                className="md:w-1/2 w-full p-[70px_85px] md:p-[50px] col:p-[30px_10px] min-h-[600px] flex flex-col justify-center">
                                <h2 className="text-[30px] mb-[10px] text-[#ffba08] font-heading-font font-semibold">Login</h2>
                                <p className="text-[15px] mb-[40px] text-[#687693] leading-[20px]">Sign into your pages account</p>
                                <div>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Email</label>
                                        <input value={email} type="email" id="email" name="email" placeholder="demo@gmail.com"
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="w-full relative">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Password</label>
                                        <input type="password" placeholder="" value={password} name="pass" id="password" className="pwd6 relative rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5]
                                    border-[1px] block focus:outline-0" onChange={(e) => setPassword(e.target.value)} />
                                        <span className="absolute right-[10px] top-[45px]">
                                            <button className="btn btn-default reveal6" type="button">
                                                <i className="ti-eye" id="togglePassword"></i>
                                            </button>
                                        </span>
                                    </div>
                                    <div className="w-full flex justify-between items-center">
                                        <div className="input-box">
                                            <input type="checkbox" id="fruit4" name="fruit-4" value="Strawberry"
                                                checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                                            <label for="fruit4" className="text-[#676B79] font-medium text-[14px] ml-2">Remember
                                                Me</label>
                                        </div>
                                        <div className="forget-btn">
                                            <Link to="/reset" className="font-base-font text-[16px] text-[#687693]">Forgot
                                                Password?</Link>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <button type="submit" className=" h-[45px] bg-[#ffba08] text-[16px] p-[10px_20px] text-center flex
                                    items-center mt-[20px] w-full
                                     justify-center capitalize text-[#fff]
                                 border-[#ffba08] border-[2px] transition-all hover:bg-transparent hover:text-[#ffba08]
                                 ">Login</button>
                                    </div>
                                </div>
                                <h4
                                    className="border-t-[#e5e5e5] border-transparent border-[1px] mt-[45px] border-dashed text-center font-medium mb-[20px]">
                                    <span
                                        className="text-[16px] uppercase inline-block px-[25px] bg-white relative top-[-14px] text-[#147e03]">OR</span>
                                </h4>
                                <ul className="flex items-center justify-center mb-[20px] flex-wrap">
                                    <GoogleBtn />
                                </ul>
                                <p className="text-[16px] text-[#687693] text-center">Don't have an account?
                                    <Link to="/register" className='text-[#147e03]'> Create free
                                        account</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;