import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFoodContext } from '../../Context/Food/FoodContext';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, error, isLoading, setNutrient, setSelectedFood } = useFoodContext();
    const navigate = useNavigate();
    const location = useLocation();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading food data</p>;

    // Filter the food data based on the search term
    const filteredData = data
        ? data.filter(item =>
            item.foodName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.details.LocalName?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    // Optional logic that checks if the route is /search/nutrient, then sets the nutrient keys
    const handleSearch = () => {
        const excludeKeys = ['Id', 'Code', 'REFID', 'Category', 'LocalName', 'EnglishName', 'ScientificName', 'FrenchNames'];
        if (location.pathname === '/search/nutrient' || location.pathname === '/search/multi-nutrient') {
            const foundFood = data?.find(foodItem => foodItem?.foodName === searchTerm);
            const nutrientOptions = Object.entries(foundFood?.details || {})
                .filter(([key]) => !excludeKeys.includes(key))
                .map(([key]) => key);

            setNutrient(nutrientOptions);
        }
    };

    // Clicking the search button just triggers handleSearch (if needed)
    const handleSearchClick = () => {
        handleSearch();
    };

    // The input onChange
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // When a food item is clicked in the dropdown
    const handleFoodSelect = (food) => {
        setSearchTerm(food.foodName); // show the user what they clicked
        setSelectedFood(food);        // put the selected item into context
        handleSearch();
        // Optionally append the selection to the URL
        navigate(
            `?foodName=${encodeURIComponent(food.foodName)}&localName=${encodeURIComponent(food.details.LocalName)}`,
            { replace: true }
        );
    };

    return (
        <div>
            <label htmlFor="food" className="mb-2 block">Search Food:</label>
            <div className="bg-white rounded flex items-center w-full p-2 shadow-sm border border-gray-200 mb-4">
                <button
                    type="button"
                    className="outline-none focus:outline-none"
                    onClick={handleSearchClick}
                >
                    <svg
                        className="w-5 text-gray-600 h-5 cursor-pointer"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <input
                    type="search"
                    name="food"
                    id="food"
                    placeholder="Search Food"
                    className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent h-8"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>

            {/* Display filtered data if the user is typing */}
            {searchTerm && (
                <div className="my-2 max-h-60 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div
                                key={item._id}
                                onClick={() => handleFoodSelect(item)}
                                className="cursor-pointer p-4 hover:bg-gray-100 transition duration-200 ease-in-out flex justify-between items-center"
                            >
                                <div className="text-sm font-medium text-gray-800">
                                    {item.foodName} - {item.details.LocalName}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 p-4">No results found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;