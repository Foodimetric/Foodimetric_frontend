import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaHistory, FaBook, FaFileAlt, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Using React Icons for improved icons
import { useAuth } from '../../Context/AuthContext';

const DashboardNav = ({ isExpanded, toggleSidebar }) => {
    const { logout } = useAuth()
    return (
        <nav
            className={`flex flex-col h-full bg-white shadow-md transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}
        >
            {/* Logo Section */}
            <div className="flex items-center justify-between py-4">
                <Link to={'/'} className="flex items-center space-x-2">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className={`h-10 w-10 object-contain transition-transform ${isExpanded ? 'transform scale-100' : 'transform scale-75'}`}
                    />
                </Link>

                {/* Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className="p-2 text-gray-600 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isExpanded
                                    ? 'M6 18L18 6M6 6l12 12' // Close icon
                                    : 'M4 6h16M4 12h16m-7 6h7' // Menu icon
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Navigation Links */}
            <ul className={`mt-4 space-y-2 flex-grow ${isExpanded ? 'px-4' : 'px-1'}`}>
                {[
                    { name: 'Dashboard', path: '/dashboard', icon: <FaTachometerAlt /> },
                    { name: 'History', path: '/dashboard/history', icon: <FaHistory /> },
                    { name: 'Diary', path: '/dashboard/diary', icon: <FaBook /> },
                    { name: 'Report', path: '/dashboard/report', icon: <FaFileAlt /> },
                    { name: 'Settings', path: '/dashboard/setting', icon: <FaCog /> },
                ].map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            end
                            className={({ isActive }) =>
                                `flex items-center space-x-2 p-2 rounded-lg transition-colors ${isActive
                                    ? 'bg-[#FFBA00] text-white'
                                    : 'text-[#147E03] hover:bg-[#F9A52F] hover:text-white'
                                }`
                            }
                        >
                            <span className="text-xl">{item.icon}</span>
                            {isExpanded && <span>{item.name}</span>}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Logout Button (Fixed at the bottom) */}
            <div className="mt-4 bg-gray-300">
                <button
                    onClick={logout}
                    type="button"
                    className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-gray-600 hover:text-white text-sm font-semibold transition"
                >
                    <FaSignOutAlt className="mr-2" />
                    {isExpanded && <span>Logout</span>}
                </button>
            </div>
        </nav>
    );
};

export default DashboardNav;