import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { FaWeightHanging, FaUserMd, FaRulerVertical } from 'react-icons/fa';

const AntroNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const { user } = useAuth();


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleBlur = (event) => {
        if (!navRef.current.contains(event.relatedTarget)) {
            setIsMenuOpen(false);
        }
    }

    const menuItems = [
        { to: '/anthro/BMI', label: 'BMI', icon: <FaWeightHanging /> },
        { to: '/anthro/BMR', label: 'BMR', icon: <FaUserMd /> },
        { to: '/anthro/IBW', label: 'IBW', icon: <FaRulerVertical /> },
        { to: '/anthro/WHR', label: 'WHR', icon: <FaRulerVertical /> },
        { to: '/anthro/EE', label: 'EE', icon: <FaUserMd /> },
        { to: '/anthro/EER', label: 'EER', icon: <FaWeightHanging /> },
        { to: '/anthro/BMI-age', label: 'BMI-Age', icon: <FaWeightHanging /> },
        { to: '/anthro/Weight-age', label: 'Weight-Age', icon: <FaUserMd /> },
        { to: '/anthro/Height-age', label: 'Height-Age', icon: <FaRulerVertical /> },
        { to: '/anthro/Weight-Height', label: 'Weight-Height', icon: <FaWeightHanging /> },
    ];
    return (
        <>
            <div className="fixed top-0 left-0 bg-white h-16 z-10 w-60 md:hidden flex items-center border-b border-gray-300">
                <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <nav ref={navRef} onBlur={handleBlur} tabIndex="0" className={`fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60 z-10 font-base-font transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div className="flex flex-col justify-between h-full overflow-auto hide-scrollbar">
                    <div className="flex-grow">
                        <div className="px-4 py-0 text-center border-b h-16">
                            <Link to={'/'}>
                                <img className="" src="../assets/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="p-4 h-[80vh] overflow-scroll hide-scrollbar">
                            <ul className="space-y-1">
                                {menuItems.map(({ to, label, icon }) => (
                                    <li key={to}>
                                        <NavLink
                                            to={to}
                                            className={({ isActive }) =>
                                                `flex items-center rounded-xl font-bold text-sm py-3 px-4 ${isActive ? 'bg-[#147e03] text-white' : 'bg-white hover:bg-green-50 text-gray-900'}`
                                            }
                                        >
                                            {icon}
                                            {label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4">
                            <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="" viewBox="0 0 16 16">
                                    <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                            </button> <span className="font-bold text-sm ml-2">Logout</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default AntroNav;
