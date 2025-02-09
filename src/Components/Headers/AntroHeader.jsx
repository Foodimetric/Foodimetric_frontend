import React from 'react';
import ProfileDropdown from '../Nav/ProfileDropdown';
import { useAuth } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

const AntroHeader = ({ title }) => {
    const { isAuthenticated } = useAuth()

    return (
        <div className="fixed right-0 top-0 left-60 h-16 bg-white z-10 xs:left-48 md:left-60">
            <div className="flex justify-between items-center flex-shrink-0 h-16 px-8 border-b border-gray-300 xs:px-2 md:px-8">
                <h1 className="text-xl font-medium text-[#ffba08] font-heading-font xs:text-base text-center">{title}</h1>
                <div className="flex items-center xs:hidden sm:block">
                    {isAuthenticated ? (
                        <div className="">
                            <ProfileDropdown />
                        </div>
                    ) : (
                        <Link
                            to="/register"
                            className="block theme-btn py-[10px] px-[25px] bg-[#1f1e1e]  md:block  before:hidden xs:text-sm sm:text-base"
                        >
                            Register
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AntroHeader;
