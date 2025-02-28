import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import SearchNav from '../../Components/Nav/SearchNav'
import SearchHeader from '../../Components/Headers/SearchHeader';
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
            <title>Search Foods & Nutrients - Find Healthier Choices | Foodimetric</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <div className=''>
                <SearchNav />
            </div>
            <div className='ml-60 max-h-screen overflow-auto max-w-6xl w-[100vw] mx-auto xs:ml-0 md:ml-60'>
                <SearchHeader title={pageTitle} setSelectedDb={setSelectedDb} selectedDb={selectedDb} />
                <div className='bg-gray-100'>
                    <div className='px-8 pt-16 '>
                        <Outlet context={{ selectedDb }} />
                    </div>
                    <footer className="bg-gray-200 text-center text-gray-700 text-sm py-4 mt-8 font-base-font">
                        Data sources: {selectedDb === "west_africa"
                            ? "FAO West African Food Database, 2019"
                            : "Nigeria Food Composition Table, 2017"}
                    </footer>
                </div>
            </div>
        </main>
    );
}

export default SearchLayout;