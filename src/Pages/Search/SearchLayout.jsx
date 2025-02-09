import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import SearchNav from '../../Components/Nav/SearchNav'
import SearchHeader from '../../Components/Headers/SearchHeader';

const SearchLayout = () => {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);
    const [selectedDb, setSelectedDb] = useState('nigeria');


    function getPageTitle(pathname) {
        switch (pathname) {
            case '/search/food':
                return 'Food';
            case '/search/nutrient':
                return 'Nutrient';
            case '/search/multi-nutrient':
                return 'Multi-Nutrient';
            case '/search/multi-food':
                return 'Multi-Food';
            case '/search/alternative':
                return 'Alternative';
            default:
                return 'Search';
        }
    }
    return (
        <main className='flex max-h-screen w-screen'>
            <div className=''>
                <SearchNav />
            </div>
            <div className='ml-60 max-h-screen overflow-auto max-w-6xl w-[100vw] mx-auto xs:ml-0 md:ml-60'>
                <SearchHeader title={pageTitle} setSelectedDb={setSelectedDb} selectedDb={selectedDb} />
                <div className='bg-gray-100'>
                    <div className='px-8 pt-16 '>
                        <Outlet context={{ selectedDb }} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SearchLayout;