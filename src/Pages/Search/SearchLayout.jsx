import React from 'react';
import { Outlet, useLocation } from 'react-router';
import SearchNav from '../../Components/Nav/SearchNav'
import SearchHeader from '../../Components/Headers/SearchHeader';

const SearchLayout = () => {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);

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
        <main className='flex max-h-screen'>
            <div className=''>
                <SearchNav />
            </div>
            <div className='ml-60 max-h-screen overflow-auto font-base-font max-w-6xl w-[100vw] mx-auto'>
                <SearchHeader title={pageTitle} />
                <div className='bg-gray-100'>
                    <div className='px-8 pt-16 '>
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SearchLayout;