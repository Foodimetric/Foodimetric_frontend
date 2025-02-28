import React from 'react';
import HeaderLink from '../Components/Headers/HeaderLink';
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Error = () => {
    return (
        <>
            <HeaderLink />
            <Helmet>
                <title>404 - Page Not Found | Foodimetric</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <section className="relative pt-[120px] pb-[120px] md:py-[80px] overflow-hidden z-1 text-center">
                <div className="wraper">
                    <div className="">
                        <div className="mx-auto text-center">
                            <img className="max-w-full mx-auto" src="assets/images/error-404.png" alt="" />
                        </div>
                        <div className="mt-[70px] px-[200px] md:mt-[50px] md:px-[100px] sm:p-0">
                            <h3 className="text-[#062856] text-[30px] mb-[35px] font-base-font font-semibold">Oops! Page
                                Not
                                Found!
                            </h3>
                            <p className="text-[#666] text-[16px] mb-[30px] leading-[22px]">We’re sorry but we can’t
                                seem to
                                find the page you requested. This might be because
                                you have typed the web address incorrectly.</p>
                            <Link to="/" className="theme-btn bg-[#147e03]">Back
                                to home</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Error;