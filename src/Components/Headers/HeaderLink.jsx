import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ProfileDropdown from '../Nav/ProfileDropdown';
import { Avatar, IconButton } from '@mui/material';
import { useAuth } from '../../Context/AuthContext';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';


const HeaderLink = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated, user } = useAuth();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // console.log(isAuthenticated);
    return (
        <div className="px-2 md:px-0 border-t-[#eee] border-t wraper">
            <div className="flex items-center justify-between  rounded-[5px]  relative z-10 md:py-[10px]">
                <div id="dl-menu" className="dl-menuwrapper block w-full md:hidden">
                    <button className="dl-trigger" onClick={toggleMenu}>
                        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
                    </button>
                    <ul className={` ${isMenuOpen ? 'block w-[100%] mt-3' : 'hidden'}`}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/about">About Us </Link>
                            <ul className="dl-submenu">
                                <li><a href="team.html">Team</a></li>
                                <li><a href="Faq.html">FAQ</a></li>
                            </ul>
                        </li>
                        <li><Link to="/search/food">Search</Link>
                            <ul className="dl-submenu">
                                <li><Link to="/search/nutrient">Nutrient</Link></li>
                                <li><Link to="/search/food">Food</Link></li>
                                <li><Link to="/search/multi-nutrient">Multi-Nutrient</Link></li>
                                <li><Link to="/search/multi-food">Multi-Food</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/anthro/BMI">Nutrition Stat</Link>
                            <ul className="dl-submenu">
                                <li><Link to="/anthro/BMI">BMI </Link></li>
                                <li><Link to="/anthro/IBW">IBW</Link></li>
                                <li><Link to="/anthro/WHR">WHR</Link></li>
                                {/* <li><Link to="/anthro/percentile">Percentile</Link></li> */}
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                        {isAuthenticated && user && <li className='flex space-x-2 items-center'>
                            <Link to="/dashboard" className='before:hidden after:hidden capitalize'>
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#F78914] bg-gray-200 text-[#F78914]"
                                >
                                    <i className="ti-user text-lg"></i>
                                </div>
                            </Link>
                            <span className='text-white font-bold capitalize'>{`${user?.firstName} ${user?.lastName}`}</span>
                        </li>}
                    </ul>
                </div>

                <div className="w-[195px] md:w-[150px] sm:w-[200px] col:w-[150px] col:ml-[50px] hidden lg:block">
                    <Link className="flex items-center md:justify-center text-white" to="/">
                        <img className="" src="assets/logo-alt.png" alt="" /></Link>
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
                        <button className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible">Nutrition Stat</button>
                        <ul className="absolute w-[240px] left-0 top-[110%] pt-[20px] pb-[15px] px-[7px] z-[111] bg-[#fff]
                                shadow-[0px_2px_20px_0px_rgba(62,65,159,0.09);] transition-all opacity-0 invisible
                                group-hover:opacity-100 group-hover:top-full group-hover:visible">
                            <li>
                                <Link to="/anthro/BMI" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">BMI</Link>
                            </li>
                            <li>
                                <Link to="/anthro/IBW" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">IBW</Link>
                            </li>
                            <li>
                                <Link to="/anthro/WHR" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">WHR</Link>
                            </li>
                            {/* <li>
                                <Link to="/anthro/BMI-age" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Percentile</Link>
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
                                <Link to="/search/food" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Food</Link>
                            </li>
                            <li>
                                <Link to="/search/nutrient" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[rgb(234,124,8)] after:transition-all font-base-font
                                        hover:after:w-[50%]">Nutrient</Link>
                            </li>
                            <li>
                                <Link to="/search/multi-nutrient" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Multi-Nutrient</Link>
                            </li>
                            <li>
                                <Link to="/search/multi-food" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Multi-Food</Link>
                            </li>
                            {/* <li>
                                <Link to="/search/alternative" className="text-[16px] lg:text-[16px] inline-block  px-[15px] capitalize
                                        text-[#0a272c] group relative overflow-hidden font-bold transition-all
                                        after:absolute after:left-[15px] after:bottom-0 after:w-0 after:h-[2px]
                                        after:content after:bg-[#ea7c08] after:transition-all font-base-font
                                        hover:after:w-[50%]">Alternative Food Search</Link>
                            </li> */}
                        </ul>
                    </li>

                    <li className="relative inline-block">
                        <Link to="/contact" className="relative text-[16px] lg:text-[17px] py-[35px]
                                xl:py-[30px] px-[20px] xl:px-[6px]
                                text-[#14212b] block capitalize
                                font-base-font font-bold transition-all
                                hover:text-[#ea7c08]
                                before:absolute before:left-0 before:top-0 before:w-full before:h-[4px]
                                before:bg-[#ea7c08] before:content
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                hover:before:opacity-100 hover:before:visible
                            ">Contact
                        </Link>
                    </li>
                </ul>
                {!isAuthenticated && <Link className={`theme-btn py-[10px] px-[25px] bg-[#1f1e1e]  md:block  before:hidden ${isMenuOpen ? 'hidden' : 'block'}`}
                    to="/register">Register
                </Link>}
                {isAuthenticated && user &&
                    <Link to={'/dashboard'} className='before:hidden after:hidden hidden md:block' >
                        <IconButton className={` ${isMenuOpen ? 'hidden' : 'block'}`}>
                            <Avatar className='capitalize' alt={user?.firstName && user?.lastName
                                ? `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
                                : 'Guest'} src={`${FOODIMETRIC_HOST_URL}${user?.profilePicture}`}
                            />
                        </IconButton>
                    </Link>}

            </div>
        </div>
    );
}

export default HeaderLink;