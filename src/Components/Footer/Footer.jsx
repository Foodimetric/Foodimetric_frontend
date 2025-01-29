import React, { useState } from 'react';
// import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FOODIMETRIC_HOST_URL } from "../../Utils/host";
import showToast from '../../Utils/toast'

const Footer = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false); // New loading state

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            showToast('error', "Email is required");
            return;
        }


        setLoading(true); // Start loading
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/newsletter/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            console.log("result", result);


            if (response.ok) {
                showToast('success', "Subscribed successfully!");
            } else {
                showToast('error', result.message || "Failed to subscribe");
            }
        } catch (error) {
            console.error("Error subscribing:", error);
            showToast('error', "An error occurred. Please try again.");
        } finally {
            setLoading(false); // Stop loading after request completes
        }
    };
    return (
        <footer className="bg-[#147e03] relative z-[1]">
            <div className="py-[80px] md:pb-[60px] relative overflow-hidden xs:px-6 sm:px-2">
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6 lg:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-12 col:col-span-12 md:mb-[30px]">
                            <div className="max-w-[180px] mb-[30px]">
                                <img src="assets/logo.png" alt="blog" />
                            </div>
                            <p className="mb-[10px] text-white text-[16px] leading-[30px]">Providing access to technological resources to improve nutrition and health.</p>
                            <ul className="pt-[10px]">
                                <li className="inline-block text-[22px] text-white">
                                    <Link to={'https://web.facebook.com/profile.php?id=61557260650546'} target="_blank"
                                        rel="noopener noreferrer" className="text-white w-[36px] h-[36px] leading-[40px]
                                     bg-[rgba(255,255,255,0.1)] block text-center rounded-[50%]
                                      text-[18px] transition-all-all
                                      hover:bg-[#F78914]" href="# ">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li className="inline-block text-[22px] text-white ml-[20px] lg:ml-[20px]">
                                    <Link to='https://twitter.com/foodimetric' target="_blank"
                                        rel="noopener noreferrer" className="text-white w-[36px] h-[36px] leading-[40px]
                                     bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-center rounded-[50%]
                                      text-[18px] transition-all-all
                                      hover:bg-[#F78914]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" fill="white">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="inline-block text-[22px] text-white ml-[20px] lg:ml-[20px]">
                                    <Link to="https://www.instagram.com/p/CzYXNuTIhqx/?igshid=NTc4MTIwNjQ2YQ==" target="_blank"
                                        rel="noopener noreferrer" className="text-white w-[36px] h-[36px] leading-[40px]
                                     bg-[rgba(255,255,255,0.1)] block text-center rounded-[50%]
                                      text-[18px] transition-all-all
                                      hover:bg-[#F78914]">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li className="inline-block text-[22px] text-white ml-[20px] lg:ml-[20px]">
                                    <Link to="https://www.linkedin.com/company/foodimetric/" target="_blank"
                                        rel="noopener noreferrer" className="text-white w-[36px] h-[36px] leading-[40px]
                                     bg-[rgba(255,255,255,0.1)] block text-center rounded-[50%]
                                      text-[18px] transition-all-all
                                      hover:bg-[#F78914]">
                                        <i className="ti-linkedin"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-6 lg:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-12 col:col-span-12 md:mb-[30px]">
                            <div className="pl-[50px] lg:pl-0 md:pl-0 sm:pl-0 xs:pl-0">
                                <div className="mb-[30px]">
                                    <h3 className="text-[25px] text-white capitalize relative font-heading-font font-normal
                                     ">Quick Links</h3>
                                </div>
                                <ul>
                                    <li className="relative z-[1] py-[6px]">
                                        <Link to="/about" className="text-[16px] font-heading-font transition-all-all text-white 
                                           duration-300 hover:text-[#F78914]">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="relative z-[1] py-[6px]">
                                        <Link to="/terms" className="text-[16px] font-heading-font transition-all-all text-white 
                                           duration-300 hover:text-[#F78914]">
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li className="relative z-[1] py-[6px]">
                                        <Link to="/privacy" className="text-[16px] font-heading-font transition-all-all text-white 
                                           duration-300 hover:text-[#F78914]">
                                            Privacy
                                        </Link>
                                    </li>
                                    <li className="relative z-[1] py-[6px]">
                                        <Link to="/contact" className="text-[16px] font-heading-font transition-all-all text-white 
                                           duration-300 hover:text-[#F78914]">
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-12 col:col-span-12 md:mb-[30px]">
                            <div className="px-[20px] lg:px-0 sm:pl-0 xs:pl-0">
                                <div className="mb-[30px]">
                                    <h3 className="text-[25px] text-white capitalize relative font-heading-font font-normal
                                     ">Our Address</h3>
                                </div>
                                <ul>
                                    <li className="mb-[10px] text-white text-[15px] font-heading-font">
                                        <i className="ti-location-pin text-[#F78914]"></i> <span>Ibadan, Nigeria</span>
                                    </li>
                                    <li className="mb-[10px] text-white text-[15px] font-heading-font">
                                        <Link to="mailto:foodimetric@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-email text-[#F78914]"></i> <span>foodimetric@gmail.com</span>
                                        </Link>
                                    </li>
                                    <li className="mb-[10px] text-white text-[15px] font-heading-font">
                                        <Link to="tel:+2347085056806" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-mobile text-[#F78914]"></i> <span>+2347085056806</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-12 col:col-span-12 md:mb-[30px]">
                            <div className="mb-[30px]">
                                <h3 className="text-[25px] text-white capitalize relative font-heading-font font-normal
                                     ">Newsletter</h3>
                            </div>
                            <p className="mb-[10px] text-white text-[16px] leading-[30px] font-heading-font">Stay informed about new tools and resources that can help you achieve your health goals.</p>
                            <form className="mt-[25px] relative" onSubmit={handleSubmit}>
                                <input type="email" className="bg-white h-[55px] text-[#141d37] p-[6px_15px] 
                                border-[1px] border-white w-full focus:outline-0 rounded-[5px] "
                                    placeholder="Email Address *" required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <div className="absolute right-[5px] top-[-17px] translate-y-1/2">
                                    <button
                                        type="submit"
                                        className="bg-[#F78914] border-0 outline-0 text-white w-[40px] h-[45px] leading-[45px] 
                    transition-all rounded-[5px] flex items-center justify-center"
                                        disabled={loading} // Disable button while loading
                                    >
                                        {loading ? (
                                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                                        ) : (
                                            <i className="ti-angle-right"></i>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center relative bg-[#ffba08] py-[20px]">
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <p className="text-[15px] text-white text-center font-heading-font">
                                Copyright &copy; {new Date().getFullYear()} All Right Reserved by
                                <Link to="/" className="text-[#147e03]"> Foodimetric</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;