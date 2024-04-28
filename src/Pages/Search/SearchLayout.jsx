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
            <div className='w-full lg:w-1/5 max-h-full'>
                <SearchNav />
            </div>
            <div className='w-full lg:w-4/5 max-h-full font-base-font'>
                <SearchHeader title={pageTitle} />
                <div className='w-full bg-gray-100 max-h-full'>
                    <div className='px-8 max-h-full'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SearchLayout;