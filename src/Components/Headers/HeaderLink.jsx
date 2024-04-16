import React from 'react';
import { Link } from 'react-router-dom';


const HeaderLink = () => {
    return (
        <div className="px-2 md:px-0 border-t-[#eee] border-t wraper">
                <div className="flex items-center justify-between  rounded-[5px]  relative z-10 md:py-[10px]">
                    <div id="dl-menu" className="dl-menuwrapper block md:hidden">
                        <button className="dl-trigger">Open Menu</button>
                        <ul className="dl-menu">
                            <li><a href="# ">About Us </a>
                            <ul className="dl-submenu">
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="Faq.html">FAQ</a></li>
                                </ul>
                            </li>
                            <li><a href="# ">Search</a>
                                <ul className="dl-submenu">
                                    <li><a href="team.html">Nutrient</a></li>
                                    <li><a href="service.html">Food</a></li>
                                    <li><a href="service-single.html">Multi-Nutrient</a></li>
                                    <li><a href="testimonial.html">Multi-Food</a></li>
                                </ul>
                            </li>
                            <li><a href="# ">Anthropometric</a>
                                <ul className="dl-submenu">
                                    <li><a href="shop.html">BMI </a></li>
                                    <li><a href="shop-single.html">IBW</a></li>
                                    <li><a href="cart.html">WHR</a></li>
                                    <li><a href="checkout.html">Percentile</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="http://google.com/">Articles</a>
                            </li>
                            <li>
                                <a href="http://google.com/">Alternative Search</a>
                            </li>
                            <li><Link to="contact">Contact</Link></li>
                            <li>
                                <a href="http://google.com/">Dashboard</a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-[195px] md:w-[150px] sm:w-[200px] col:w-[150px] col:ml-[50px] ">
                        <Link className="flex items-center md:justify-center text-white" to="/">
                            <img className="" src="assets/logo.png" alt="" /></Link>
                    </div>
                    <ul className="hidden lg:block space-x-4" >
                        
                        <li className="relative inline-block">
                            <Link to="/about" className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible">About Us</Link>
                        </li>
                        <li className="relative inline-block group">
                            <a href="# " className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible">Anthro</a>
                            <ul className="absolute w-[240px] left-0 top-[110%] pt-[20px] pb-[15px] px-[7px] z-[111] bg-[#fff]
                                shadow-[0px_2px_20px_0px_rgba(62,65,159,0.09);] transition-all opacity-0 invisible
                                group-hover:opacity-100 group-hover:top-full group-hover:visible ">
                                <li>
                                    <a href="shop.html" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">BMI</a>
                                </li>
                                <li>
                                    <a href="shop-single.html" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">IBW</a>
                                </li>
                                <li>
                                    <a href="cart.html" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">WHR</a>
                                </li>
                                <li>
                                    <a href="checkout.html" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Percentile</a>
                                </li>
                            </ul>
                        </li>
                        <li className="relative inline-block group">
                            <a href="# " className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible">Search</a>
                            <ul className="absolute w-[240px] left-0 top-[110%] pt-[20px] pb-[15px] px-[7px] z-[111] bg-[#fff]
                                shadow-[0px_2px_20px_0px_rgba(62,65,159,0.09);] transition-all opacity-0 invisible
                                group-hover:opacity-100 group-hover:top-full group-hover:visible ">
                                <li>
                                    <a href="team.html" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Food</a>
                                </li>
                                <li>
                                    <a href="service.html" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[rgb(234,124,8)] after:transition-all font-base-font
                                        hover:after:w-[50%]">Nutrient</a>
                                </li>
                                <li>
                                    <a href="service-single.html" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Multi-Nutrient</a>
                                </li>
                                <li>
                                    <a href="testimonial.html" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Multi-Food</a>
                                </li>
                                <li>
                                    <a href="testimonial.html" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Alternative Food Search</a>
                                </li>
                            </ul>
                        </li>

                        <li className="relative inline-block">
                            <Link to="contact" className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible
                            ">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
    );
}
 
export default HeaderLink;