import React from 'react';
import HeaderLink from '../Components/Headers/HeaderLink';
import { Link } from 'react-router-dom';

const Reset = () => {
    return ( 
        <main>
           <div className="page-wrapper">
                <HeaderLink />
                <div className="w-full overflow-hidden flex items-center min-h-[100vh] p-[50px_0]">
                    <div className="wraper">
                        <form className="md:w-[1170px] w-[600px] sm:w-[500px] col:w-full flex flex-wrap bg-white m-auto shadow-[0px_14px_60px_rgba(0,0,0,0.06)] rounded-[10px]
                             overflow-hidden" action="#">
                            <div className="md:w-1/2 w-full bg-[#1a384c] flex flex-col justify-between min-h-[600px] text-center p-[50px] col:p-[30px_10px] login">
                                
                            </div>
                            <div
                                className="md:w-1/2 w-full p-[70px_85px] md:p-[50px] col:p-[30px_10px] min-h-[600px] flex flex-col justify-center">
                                <h2 className="text-[30px] mb-[10px]  font-heading-font font-semibold">Reset Password</h2>
                                <p className="text-[15px] mb-[40px] text-[#687693] leading-[20px]">Recover your Account</p>
                                <div>

                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Your email here.."
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0"/>
                                    </div>


                                    <div className="w-full">
                                        <button type="submit" className=" h-[45px] bg-[#ffba08] text-[16px] p-[10px_20px] text-center flex
                                            items-center mt-[20px] w-full
                                            justify-center capitalize text-[#fff]
                                            border-[#ffba08] border-[2px] transition-all hover:bg-transparent hover:text-[#ffba08]
                                        ">
                                            Sign Up
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