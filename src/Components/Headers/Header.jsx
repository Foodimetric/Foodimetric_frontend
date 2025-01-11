import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import ProfileDropdown from '../Nav/ProfileDropdown';
import { Avatar, IconButton } from '@mui/material';
import { useAuth } from '../../Context/AuthContext';

const Header = () => {
    const { isAuthenticated, user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="relative z-[111]">
            <h1 className="hidden">section heading hidden</h1>
            <div className="py-[20px] px-12 relative z-10">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-8 col-span-12 ">
                        <div className="flex md:justify-start justify-center flex-wrap">
                            <div className="mx-3 flex items-center sm:mx-3  sm:text-center col:mb-4">
                                <i className="ti-headphone-alt  text-lg text-[#F78914]"></i>
                                <p className="text-[#232323] font-medium text-[15px] pl-[10px] font-base-font">+2347085056806</p>
                            </div>
                            <div className="mx-3 flex items-center sm:mx-3  sm:text-center col:mb-4">
                                <i className="ti-email text-lg text-[#F78914]"></i>
                                <p className="text-[#232323] font-medium text-[15px] pl-[10px] font-base-font">
                                    foodimetric@gmail.com</p>
                            </div>
                            <div className="mx-3 flex items-center sm:mx-3  sm:text-center col:mb-0">
                                <i className="ti-location-pin text-lg text-[#F78914]"></i>
                                <p className="text-[#232323] font-medium text-[15px] pl-[10px] font-base-font">Ibadan, Nigeria</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 col-span-12 ">
                        <ul className="md:text-right text-center md:mt-2 space-x-4">
                            <li className="inline-block ml-2">Visit our social pages</li>
                            <li className="inline-block ml-2"><Link target="_blank"
                                rel="noopener noreferrer" to="https://web.facebook.com/profile.php?id=61557260650546"
                                className="text-[#F78914] text-sm transition-all hover:text-[#687693]"><i
                                    className="ti-facebook"></i></Link></li>

                            <li className="inline-block ml-2"><Link target="_blank"
                                rel="noopener noreferrer" to="https://www.instagram.com/foodimetric/?utm_source=ig_web_button_share_sheet"
                                className="text-[#F78914] text-sm transition-all hover:text-[#687693]"><i
                                    className="ti-instagram"></i></Link></li>

                            <li className="inline-block ml-2"><Link target="_blank"
                                rel="noopener noreferrer" to="https://www.linkedin.com/company/foodimetric/"
                                className="text-[#F78914] text-sm transition-all hover:text-[#687693]"><i
                                    className="ti-linkedin"></i></Link></li>
                            <li className="inline-block ml-2"><Link target="_blank"
                                rel="noopener noreferrer" to="https://twitter.com/foodimetric"
                                className="text-[#F78914] text-sm transition-all hover:text-[#687693]"><i
                                    className="ti-twitter"></i></Link></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-2 md:px-12 border-t-[#eee] border-t">
                <div className="flex items-center justify-between  rounded-[5px]  relative z-10 md:py-[10px]">
                    <div id="dl-menu" className="dl-menuwrapper w-full block md:hidden">
                        <button className="dl-trigger" onClick={toggleMenu}>
                            {isMenuOpen ? 'Close Menu' : 'Open Menu'}
                        </button>
                        <ul className={` ${isMenuOpen ? 'block w-full mt-3' : 'hidden'}`}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li><NavLink to="/about">About Us </NavLink>
                                <ul className="dl-submenu">
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="Faq.html">FAQ</a></li>
                                </ul>
                            </li>
                            <li><NavLink to="/search/food" >Search</NavLink>
                                <ul className="dl-submenu">
                                    <li><NavLink to="/search/nutrient">Nutrient</NavLink></li>
                                    <li><NavLink to="/search/food">Food</NavLink></li>
                                    <li><NavLink to="/search/multi-nutrient">Multi-Nutrient</NavLink></li>
                                    <li><NavLink to="/search/multi-food">Multi-Food</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/anthro/BMI">Nutrition Stats</NavLink>
                                <ul className="dl-submenu">
                                    <li><a href="shop.html">BMI </a></li>
                                    <li><a href="shop-single.html">IBW</a></li>
                                    <li><a href="cart.html">WHR</a></li>
                                    {/* <li><a href="checkout.html">Percentile</a></li> */}
                                </ul>
                            </li>
                            <li><Link to="contact">Contact</Link></li>
                            {isAuthenticated && <li className='flex space-x-2 items-center'>
                                <Link to="/dashboard" className='before:hidden after:hidden'>
                                    <IconButton >
                                        <Avatar alt={user?.firstName && user?.lastName
                                            ? `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
                                            : 'Guest'} src="/path/to/profile.jpg" />
                                    </IconButton>
                                </Link>
                                <span className='text-white font-bold'> Folake Olamide</span>
                            </li>}
                        </ul>
                    </div>

                    <div className="w-[195px] md:w-[150px] sm:w-[200px] col:w-[150px] col:ml-[50px] hidden lg:block">
                        <Link to={'/'} className="flex items-center md:justify-center text-white">
                            <img className="" src="assets/logo.png" alt="" /></Link>
                    </div>
                    <ul className="hidden lg:block space-x-4" >
                        <li className="relative  inline-block group">
                            <Link to="/" className="relative text-[16px] lg:text-[16px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible">Home</Link>
                        </li>
                        <li className="relative inline-block">
                            <NavLink to="/about" className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible">About Us</NavLink>
                        </li>
                        <li className="relative inline-block group">
                            <button className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible">Nutrition Stats</button>
                            <ul className="absolute w-[240px] left-0 top-[110%] pt-[20px] pb-[15px] px-[7px] z-[111] bg-[#fff]
                                shadow-[0px_2px_20px_0px_rgba(62,65,159,0.09);] transition-all opacity-0 invisible
                                group-hover:opacity-100 group-hover:top-full group-hover:visible ">
                                <li>
                                    <NavLink to="/anthro/BMI" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">BMI</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/anthro/IBW" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">IBW</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/anthro/WHR" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">WHR</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/anthro/BMI-age" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Percentile</NavLink>
                                </li> */}
                            </ul>
                        </li>
                        <li className="relative inline-block group">
                            <button className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible">Search</button>
                            <ul className="absolute w-[240px] left-0 top-[110%] pt-[20px] pb-[15px] px-[7px] z-[111] bg-[#fff]
                                shadow-[0px_2px_20px_0px_rgba(62,65,159,0.09);] transition-all opacity-0 invisible
                                group-hover:opacity-100 group-hover:top-full group-hover:visible ">
                                <li>
                                    <NavLink to="/search/food" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Food</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/search/nutrient" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[rgb(234,124,8)] after:transition-all font-base-font
                                        hover:after:w-[50%]">Nutrient</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/search/multi-nutrient" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Multi-Nutrient</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/search/multi-food" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Multi-Food</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/search/alternative" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Alternative Food Search</NavLink>
                                </li> */}
                            </ul>
                        </li>

                        <li className="relative inline-block">
                            <NavLink to="contact" className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible
                            ">Contact</NavLink>
                        </li>
                    </ul>
                    {!isAuthenticated && <Link className={`theme-btn py-[10px] px-[25px] bg-[#1f1e1e]  md:block  before:hidden ${isMenuOpen ? 'hidden' : 'block'}`}
                        to="/register">Register
                    </Link>}
                    {isAuthenticated &&
                        <Link to={'/dashboard'} className='before:hidden after:hidden hidden md:block' >
                            <IconButton className={` ${isMenuOpen ? 'hidden' : 'block'}`}>
                                <Avatar alt={user?.firstName && user?.lastName
                                    ? `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
                                    : 'Guest'} src="/path/to/profile.jpg" />
                            </IconButton>
                        </Link>}
                </div>
            </div>
        </header>
    );
}

export default Header;