import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderLink from '../Components/Headers/HeaderLink';
import axios from 'axios';
import { FOODIMETRIC_HOST_URL } from '../Utils/host';
import showToast from '../Utils/toast';

const NewPassword = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false); // Track request st
    const [confirmPassword, setConfirmPassword] = useState('');

    // Extract email from the query parameter
    const location = useLocation();
    const email = new URLSearchParams(location.search).get('email');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        // Ensure passwords match
        if (newPassword !== confirmPassword) {
            showToast('error', 'Passwords do not match');
            return;
        }

        if (!passwordRegex.test(newPassword)) {
            showToast(
                'error', 'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one number.'
            );
            return;
        }

        setLoading(true)
        try {
            const response = await axios.post(`${FOODIMETRIC_HOST_URL}/users/reset-password`, {
                email,
                newPassword,
            });

            showToast('success', response.data.message);
            navigate('/login')
        } catch (err) {
            showToast('error', err.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false)
        }
    };

    return (
        <main>
            <div className="page-wrapper">
                <HeaderLink />
                <div className="w-full overflow-hidden flex items-center min-h-[100vh] p-[50px_0]">
                    <div className="wraper-auth">
                        <form
                            className="w-full col:w-full flex flex-wrap bg-white m-auto shadow-[0px_14px_60px_rgba(0,0,0,0.06)] rounded-[10px]
                             overflow-hidden"
                            onSubmit={handleSubmit}
                        >
                            <div className="hidden sm:w-1/2 w-full bg-[#1a384c] sm:flex flex-col justify-between min-h-[600px] text-center p-[50px] col:p-[30px_10px] login" />

                            <div
                                className="sm:w-1/2 w-full p-[20px] md:p-[50px] col:p-[30px_10px] min-h-[600px] flex flex-col justify-center"
                            >
                                <h2 className="text-[30px] mb-[10px] font-heading-font font-semibold">Reset Password</h2>
                                <p className="text-[15px] mb-[40px] text-[#687693] leading-[20px]">
                                    Set your new password
                                </p>

                                <div className='w-full'>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0"
                                        />
                                    </div>

                                    <div className="w-full">
                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className="h-[45px] bg-[#ffba08] text-[16px] p-[10px_20px] text-center flex items-center mt-[20px] w-full justify-center capitalize text-[#fff] border-[#ffba08] border-[2px] transition-all hover:bg-transparent hover:text-[#ffba08]"
                                        >
                                            {loading ? (
                                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
                                            ) : (
                                                'Reset Password'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NewPassword;
