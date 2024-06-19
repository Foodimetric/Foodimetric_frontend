import React from 'react';
import ProfileDropdown from '../Nav/ProfileDropdown';

const AntroHeader = ({ title }) => {


    return (
        <div className="fixed right-0 top-0 left-60 h-16 bg-white z-10">
            <div className="flex justify-between items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                <h1 className="text-xl font-medium text-[#ffba08] font-heading-font">{title}</h1>
                <ProfileDropdown />
            </div>
        </div>
    );
}

export default AntroHeader;
