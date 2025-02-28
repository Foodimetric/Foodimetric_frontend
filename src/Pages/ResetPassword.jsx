import React, { useState } from 'react';
import HeaderLink from '../Components/Headers/HeaderLink';
import { Link, useNavigate } from 'react-router-dom';
import { FOODIMETRIC_HOST_URL } from '../Utils/host';
import showToast from '../Utils/toast';


const Reset = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // Track request st


    const handleReset = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),  // Send the email in the request body
            });

            if (!response.ok) {
                throw new Error('An error occurred');
            }

            const data = await response.json();  // Parse the response body as JSON
            showToast('success', data.message);
            navigate(`/reset?email=${encodeURIComponent(email)}`); // Navigate with the email as a query parameter
        } catch (err) {
            showToast('error', err.message || 'An error occurred');
        } finally {
            setLoading(false)
        }
    };

    return (
        <main>
            <div className="page-wrapper">
                <title>Forgot Password? Reset Your Foodimetric Account Securely</title>
                <HeaderLink />
                <div className="w-full overflow-hidden flex items-center min-h-[100vh] p-[50px_0]">
                    <div className="wraper-auth">
                        <form className="w-full col:w-full flex flex-wrap bg-white m-auto shadow-[0px_14px_60px_rgba(0,0,0,0.06)] rounded-[10px]
                             overflow-hidden" onSubmit={handleReset}>
                            <div className="hidden sm:w-1/2 w-full bg-[#1a384c] sm:flex flex-col justify-between min-h-[600px] text-center p-[50px] col:p-[30px_10px] login">

                            </div>
                            <div
                                className="sm:w-1/2 w-full p-[20px] md:p-[50px] col:p-[30px_10px] min-h-[600px] flex flex-col justify-center">
                                <h2 className="text-[30px] mb-[10px]  font-heading-font font-semibold">Verify Email</h2>
                                <p className="text-[15px] mb-[40px] text-[#687693] leading-[20px]">Recover your Account</p>

                                <div className='w-full'>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Your email here.."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" />
                                    </div>


                                    <div className="w-full">
                                        <button type="submit" disabled={loading} className=" h-[45px] bg-[#ffba08] text-[16px] p-[10px_20px] text-center flex
                                            items-center mt-[20px] w-full
                                            justify-center capitalize text-[#fff]
                                            border-[#ffba08] border-[2px] transition-all hover:bg-transparent hover:text-[#ffba08]
                                        ">
                                            {loading ? (
                                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
                                            ) : (
                                                ' Verify Email'
                                            )}
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <Link to='/login' type="button" className=" h-[45px] bg-[#147e03] text-[16px] p-[10px_20px] text-center flex
                                            items-center mt-[20px] w-full
                                            justify-center capitalize text-[#fff]
                                            border-[#147e03] border-[2px] transition-all hover:bg-transparent hover:text-[#147e03]
                                        ">
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Reset;