import React, { useState } from 'react';
import ProfileDropdown from '../Nav/ProfileDropdown';

const SearchHeader = ({ title }) => {
    // State to keep track of the selected database
    const [selectedDb, setSelectedDb] = useState('nigeria');

    // Function to update the selected database
    const handleSelectDb = (db) => {
        setSelectedDb(db);
    };

    return (
        <div className="fixed right-0 top-0 left-60 h-16 bg-white z-10">
            <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                <h1 className="text-xl font-medium text-[#147e03] font-heading-font">{title}</h1>
                <label className={`flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded cursor-pointer`}>
                    <input
                        type="radio"
                        name="db"
                        value="nigeria"
                        checked={selectedDb === 'nigeria'}
                        onChange={() => handleSelectDb('nigeria')}
                        className=""
                    />
                    Nigeria DB
                </label>

                <label className={`flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium rounded cursor-pointer`}>
                    <input
                        type="radio"
                        name="db"
                        value="west-africa"
                        checked={selectedDb === 'west-africa'}
                        onChange={() => handleSelectDb('west-africa')}
                        className=""
                    />
                    West-Africa DB
                </label>
                <ProfileDropdown />
            </div>
        </div>
    );
}

export default SearchHeader;
