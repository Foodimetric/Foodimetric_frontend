import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa';


const SearchNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const { logout } = useAuth()


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const handleBlur = (event) => {
    //     if (!navRef.current.contains(event.relatedTarget)) {
    //         setIsMenuOpen(false);
    //     }
    // }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <div className="fixed top-0 left-0 bg-white h-16 z-10 w-60 md:hidden flex items-center border-b border-gray-300">
                <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <nav ref={navRef}
                // onBlur={handleBlur}
                tabIndex="0" className={`fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60 z-10 font-base-font transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div className="flex flex-col justify-between h-full overflow-auto hide-scrollbar">
                    <div className="flex-grow">
                        <div className="px-4 py-0 text-center border-b h-16">
                            <Link to={'/'} className="">
                                <img className="" src="../assets/logo-alt.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="p-4 h-[80vh] overflow-scroll hide-scrollbar">
                            <ul className="space-y-1">
                                {/* <li className='flex justify-end sm:hidden'>
                                    <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    </button>
                                </li> */}
                                <li>
                                    <NavLink
                                        to="/search/food"
                                        className={({ isActive }) =>
                                            `flex items-center rounded-xl font-bold text-sm py-3 px-4 
                                    ${isActive ? 'bg-[#ffba08] text-white' : 'bg-white hover:bg-yellow-50 text-gray-900'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                        </svg>Food
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/search/nutrient"
                                        className={({ isActive }) =>
                                            `flex items-center rounded-xl font-bold text-sm py-3 px-4 
                                    ${isActive ? 'bg-[#ffba08] text-white' : 'bg-white hover:bg-yellow-50 text-gray-900'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                                        </svg>Nutrient
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/search/multi-food"
                                        className={({ isActive }) =>
                                            `flex items-center rounded-xl font-bold text-sm py-3 px-4 
                                    ${isActive ? 'bg-[#ffba08] text-white' : 'bg-white hover:bg-yellow-50 text-gray-900'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                                            <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                                        </svg>Multi-Food
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/search/multi-nutrient"
                                        className={({ isActive }) =>
                                            `flex items-center rounded-xl font-bold text-sm py-3 px-4 
                                    ${isActive ? 'bg-[#ffba08] text-white' : 'bg-white hover:bg-yellow-50 text-gray-900'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                                            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg>Multi-Nutrient
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {isMenuOpen && <div className="relative w-full">
                        <button
                            onClick={toggleDropdown}
                            className="flex w-full items-center px-5 py-4 text-left text-[18px] font-medium  bg-white focus:outline-none"
                        >
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#F78914] bg-gray-200 text-[#F78914]"
                            >
                                <i className="ti-user text-lg"></i>
                            </div>
                            <span className={`ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                        {isOpen && (
                            <div className="absolute left-0 w-full bg-white shadow-lg z-10">
                                <ul className="py-2">
                                    <li>
                                        <NavLink
                                            to="/dashboard"
                                            className="block px-5 py-3 hover:bg-gray-100 text-gray-900"
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/anthro/BMI"
                                            className="block px-5 py-3 hover:bg-gray-100 text-gray-900"
                                        >
                                            Nutrition Assessment
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>}
                    <div className="p-4 bg-gray-600">
                        <button
                            onClick={logout}
                            type="button"
                            className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-white text-sm font-semibold transition"
                        >
                            <FaSignOutAlt className="mr-2" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default SearchNav;