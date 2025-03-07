import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderLink from '../Components/Headers/HeaderLink';
import { useNavigate } from 'react-router';
import { FOODIMETRIC_HOST_URL } from '../Utils/host';


const Verify = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    // Function to extract token from URL
    const getTokenFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('token');
    };

    useEffect(() => {
        const verifyUser = async () => {
            const token = getTokenFromUrl(); // Get token from the URL

            if (!token) {
                setMessage('Invalid verification link.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/verify-user/${token}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    setUserName(data?.payload?.payload?.firstName); // Assuming user's first name is returned
                    setMessage('Your account has been successfully verified!');
                } else {
                    setMessage(data.message || 'Failed to verify your account.');
                }
            } catch (error) {
                setMessage('An error occurred during verification. Please try again.');
            }

            setLoading(false);
        };

        verifyUser();
    }, []);

    if (loading) {
        return <p>Verifying...</p>;
    }

    return (
        <main>
            <div className="page-wrapper">
                <Helmet>
                    <title>Login to Foodimetric - Access Your Personalized Nutrition Hub</title>
                    <meta name="description"
                        content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
                </Helmet>
                <HeaderLink />
                <div className="w-full overflow-hidden flex items-center min-h-[100vh] p-[50px_0]">
                    <div className="wraper-auth">
                        <form className="w-full col:w-full flex flex-wrap bg-white m-auto shadow-[0px_14px_60px_rgba(0,0,0,0.06)] rounded-[10px]
                         overflow-hidden" >
                            <div className="hidden sm:w-1/2 w-full bg-[#1a384c] sm:flex flex-col justify-between min-h-[600px] text-center p-[50px] col:p-[30px_10px] login">

                            </div>
                            <div
                                className="sm:w-1/2 w-full p-[20px] md:p-[50px] col:p-[30px_10px] min-h-[600px] flex flex-col justify-center">
                                <h2 className="text-[30px] mb-[10px] text-[#ffba08] font-heading-font font-semibold">Hello {userName}!</h2>
                                <p className="text-[15px] mb-[40px] text-[#687693] leading-[20px]">{message}</p>
                                {message === 'Your account has been successfully verified!' && (
                                    <button onClick={() => navigate('/login')} className={`w-full h-12 mt-5 text-white font-medium border-2 transition-all rounded-md flex items-center justify-center bg-[#ffba08] border-[#ffba08] hover:bg-transparent hover:text-[#ffba08]`}>
                                        Login
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Verify;