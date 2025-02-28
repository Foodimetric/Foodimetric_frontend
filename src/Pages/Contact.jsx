import React, { useState } from 'react';
import HeaderLink from '../Components/Headers/HeaderLink';
import Footer from '../Components/Footer/Footer';
import axios from 'axios';
import { FOODIMETRIC_HOST_URL } from '../Utils/host';
import showToast from '../Utils/toast';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const [loading, setLoading] = useState(false); // Track loading state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        service: "",
        note: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading animation
        try {
            const response = await axios.post(`${FOODIMETRIC_HOST_URL}/users/contact`, formData);
            setFormData({ name: "", email: "", address: "", service: "", note: "" });
            showToast('success', "Message sent successfully!");
            console.log(response);
        } catch (error) {
            showToast('error', "Error sending message. Please try again.");
        } finally {
            setLoading(false); // Hide loading animation
        }
    };


    return (
        <>
            <Helmet>
                <title>Contact Foodimetric - Get Support & Nutrition Assistance</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <HeaderLink />
            <section className="relative pt-[60px] pb-[60px]  z-1">
                <div className="wraper">
                    <div className="grid grid-cols-12">
                        <div className="col-span-1"></div>
                        <div className="col-span-10 md:col-span-12">
                            <div className="pb-[100px] sm:pb-[60px]">
                                <div className="grid grid-cols-12 gap-3">
                                    <div className="md:col-span-4 sm:col-span-12 col-span-12 mb-7">
                                        <div className="text-center p-[40px] bg-white shadow-[0px_5px_15px_0px_rgba(62,65,159,0.1)]">
                                            <div className="w-[85px] h-[85px] bg-[#f5f5f5] flex justify-center items-center mx-auto rounded-full">
                                                <div className="icon w-[50px] h-[50px]">
                                                    <i className="fi flaticon-placeholder text-[35px]"></i>
                                                </div>
                                            </div>
                                            <h2 className="text-[30px] text-[#232f4b] font-medium my-[20px]">Address</h2>
                                            <p className="text-[#4f555a] text-[16px] leading-[22px]">Ibadan, Nigeria</p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-4 sm:col-span-12 col-span-12 mb-7">
                                        <div className="text-center p-[40px] bg-white shadow-[0px_5px_15px_0px_rgba(62,65,159,0.1)]">
                                            <div className="w-[85px] h-[85px] bg-[#f5f5f5] flex justify-center items-center mx-auto rounded-full">
                                                <div className="icon w-[50px] h-[50px]">
                                                    <i className="fi flaticon-email text-[35px]"></i>
                                                </div>
                                            </div>
                                            <h2 className="text-[30px] text-[#232f4b] font-medium my-[20px]">Email Us</h2>
                                            <p className="text-[#4f555a] text-[16px] leading-[22px]">foodimetric@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-4 sm:col-span-12 col-span-12 mb-7">
                                        <div className="text-center p-[40px] bg-white shadow-[0px_5px_15px_0px_rgba(62,65,159,0.1)]">
                                            <div className="w-[85px] h-[85px] bg-[#f5f5f5] flex justify-center items-center mx-auto rounded-full">
                                                <div className="icon w-[50px] h-[50px]">
                                                    <i className="fi flaticon-phone-call text-[35px]"></i>
                                                </div>
                                            </div>
                                            <h2 className="text-[30px] text-[#232f4b] font-medium my-[20px]">Call Now</h2>
                                            <p className="text-[#4f555a] text-[16px] leading-[22px]">+2347085056806</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-[440px] mx-auto text-center mb-[50px]">
                                <h2 className="text-[35px] col:text-[25px] text-[#0a272c] font-heading-font font-bold
                                mb-[20px]">
                                    Have
                                    Any Question?</h2>
                                <p className="text-[#687693] text-[16px] leading-[22px]"> If you have any questions or need assistance, feel free to reach out to us. We're here to help!</p>
                            </div>
                            <div className="p-[50px] bg-white mb-[-125px] relative z-10
                            shadow-[0px_1px_15px_0px_rgba(62,65,159,0.1)] sm:p-7 sm:pt-[50px]">
                                <form method="post" className="contact-validation-active mx-[-15px] overflow-hidden"
                                    id="contact-form-main" onSubmit={handleSubmit}>
                                    <div
                                        className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
                                        <input type="text" className="form-control w-full bg-transparent border-[1px] border-[#ebebeb] h-[50px]
                                        text-[#212529] transition-all pl-[25px] focus:outline-0 focus:shadow-none
                                         focus:border-[#F78914] focus:bg-transparent " name="name" id="name"
                                            placeholder="Your Name*" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div
                                        className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
                                        <input type="email"
                                            className="form-control  w-full bg-transparent border-[1px] border-[#ebebeb] h-[50px] text-[#212529] transition-all pl-[25px] focus:outline-0 focus:shadow-none  focus:border-[#F78914] focus:bg-transparent"
                                            name="email" id="email" placeholder="Your Email*" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div
                                        className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
                                        <input type="text"
                                            className="form-control  w-full bg-transparent border-[1px] border-[#ebebeb] h-[50px] text-[#212529] transition-all pl-[25px] focus:outline-0 focus:shadow-none  focus:border-[#F78914] focus:bg-transparent"
                                            name="address" id="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                                    </div>
                                    <div
                                        className="w-[calc(50%-30px)] float-left mx-[15px] mb-[25px] col:float-none col:w-[calc(100%-25px)]">
                                        <select name="service"
                                            value={formData.service} onChange={handleChange} className="form-control  w-full bg-transparent border-[1px] border-[#ebebeb] h-[50px]  text-[#212529] transition-all pl-[25px] focus:outline-0 focus:shadow-none  focus:border-[#F78914] focus:bg-transparent">
                                            <option disabled="disabled" selected="">Services</option>
                                            <option>Food Search</option>
                                            <option>Nutrition Stat</option>
                                            <option>Article</option>
                                            <option>Nutri-Bot</option>
                                            <option>Partnership</option>
                                        </select>
                                    </div>
                                    <div className="w-[calc-(100%-25px)] mb-[25px] mx-[15px]">
                                        <textarea
                                            className="form-control  w-full bg-transparent border-[1px] border-[#ebebeb] h-[180px]  text-[#212529] transition-all pt-[15px] pl-[25px] focus:outline-0 focus:shadow-none  focus:border-[#F78914] focus:bg-transparent"
                                            value={formData.note} onChange={handleChange} name="note" id="note" placeholder="Message..."></textarea>
                                    </div>
                                    <div className="text-center w-full mb-[10px]">
                                        <button type="submit" className="bg-[#F78914] text-[#fff] inline-block py-[12px] px-[22px] border
                                        hover:text-[#F78914]
                                        border-transparent ] capitalize transition-all hover:bg-transparent
                                        hover:border-[#F78914]">
                                            {loading ? (
                                                <div className="animate-spin h-5 w-5 border-2 text-[#F78914] border-white border-t-transparent rounded-full"></div>
                                            ) : (
                                                "Get in Touch"
                                            )}
                                        </button>
                                        {/* <div id="loader">
                                            <i className="ti-reload"></i>
                                        </div> */}
                                    </div>
                                    {/* <div className="clearfix error-handling-messages">
                                        <div id="success">Thank you</div>
                                        <div id="error"> Error occurred while sending email. Please try again later. </div>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
            </section>
            <section >
                <Footer />
            </section>

        </>
    );
}

export default Contact;