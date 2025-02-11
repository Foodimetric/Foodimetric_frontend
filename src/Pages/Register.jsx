import React, { useState } from 'react';
import HeaderLink from '../Components/Headers/HeaderLink';
import GoogleBtn from '../Components/Buttons/GoogleBtn';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'

const Register = () => {
    const { register, formValues, handleChange, errors, loading } = useAuth();
    const [showPassword, setShowPassword] = useState(false);


    return (
        <main>
            <div className="page-wrapper">
                <HeaderLink />
                <div className="w-full overflow-hidden flex items-center min-h-[100vh] p-[50px_0]">
                    <div className="wraper-auth">
                        <form className="w-full col:w-full flex flex-wrap bg-white m-auto shadow-[0px_14px_60px_rgba(0,0,0,0.06)] rounded-[10px] overflow-hidden" onSubmit={register}>
                            <div className="hidden w-full sm:w-1/2 sm:flex flex-col justify-center min-h-[600px] text-center p-[50px] col:p-[30px_10px] register">
                            </div>
                            <div
                                className="w-full sm:w-1/2 p-[20px] md:p-[50px] col:p-[30px_10px] min-h-[600px] flex flex-col justify-center">
                                <h2 className="text-[30px] mb-[10px] text-[#147e03] font-heading-font font-semibold">Create Account</h2>
                                <p className="text-[15px] mb-[40px] text-[#687693] leading-[20px]">Sign up for a free account here</p>
                                <div className='w-full'>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">First Name</label>
                                        <input type="text" id="text" name="firstName"
                                            value={formValues.firstName}
                                            onChange={handleChange} placeholder="Your first name here.."
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" />
                                        {errors.firstName && <span>{errors.firstName}</span>}
                                    </div>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Last Name</label>
                                        <input type="text" id="last-name" name="lastName"
                                            value={formValues.lastName}
                                            onChange={handleChange} placeholder="Your last name here.."
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" />
                                        {errors.lastName && <span>{errors.lastName}</span>}
                                    </div>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Email</label>
                                        <input type="email" id="email" name="email"
                                            value={formValues.email}
                                            onChange={handleChange} placeholder="Your email here.."
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" />
                                        {errors.email && <span>{errors.email}</span>}
                                    </div>
                                    <div className="w-full relative">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Category</label>
                                        <select name="category"
                                            value={formValues.category}
                                            onChange={handleChange} id="category" className="pwd6 relative rounded-[2px] w-full mb-[15px] px-[20px] h-[60px] border-[#e5e5e5]
                                            border-[1px] block focus:outline-0">
                                            <option class="text-gray-500 bg-white border-b-[1px] border-gray-200 first:border-t-0" value="Lecturer/Researcher">Lecturer/Researcher</option>
                                            <option class="text-gray-500 bg-white border-b-[1px] border-gray-200" value="Registered Dietitian/Clinical Nutritionist">Registered Dietitian/Clinical Nutritionist</option>
                                            <option class="text-gray-500 bg-white border-b-[1px] border-gray-200" value="Nutrition Student">Nutrition Student</option>
                                            <option class="text-gray-500 bg-white border-b-[1px] border-gray-200 last:border-b-0" value="others">Others</option>
                                        </select>
                                        {errors.category && <span>{errors.category}</span>}
                                    </div>
                                    <div className="w-full relative">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Password</label>
                                        <input type={showPassword ? "text" : "password"} placeholder="" name="password"
                                            value={formValues.password}
                                            onChange={handleChange} id="password"
                                            className="pwd6 relative rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" />

                                        <span className="absolute right-[10px] top-[45px]">
                                            <button className="btn btn-default reveal6" type="button" onClick={() => setShowPassword(!showPassword)}>
                                                <i className="ti-eye" id="togglePassword"></i>
                                            </button>
                                        </span>
                                        {errors.password && <span>{errors.password}</span>}
                                    </div>
                                    <div className="w-full">
                                        <button
                                            type="submit"
                                            className={`h-[45px] bg-[#ffba08] text-[16px] p-[10px_20px] text-center flex items-center mt-[20px] w-full
        justify-center capitalize text-[#fff] border-[#ffba08] border-[2px] transition-all 
        ${loading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-transparent hover:text-[#ffba08]'}`}
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
                                            ) : (
                                                'Sign Up'
                                            )}
                                        </button>

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
                                <p className="text-[16px] text-[#687693] text-center">Already have an account?
                                    <Link to="/login" className='text-[#147e03]'> Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Register;