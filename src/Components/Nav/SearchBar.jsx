import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFoodContext } from '../../Context/Food/FoodContext';

const SearchBar = ({ selectedDb }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, west_data, westAfricaError, error, westAfricaLoading, isLoading, setNutrient, setSelectedFood } = useFoodContext();
    const navigate = useNavigate();
    const location = useLocation();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading food data</p>;

    if (westAfricaLoading) return <p>Loading...</p>;
    if (westAfricaError) return <p>Error loading food data</p>;
    // Filter the food data based on the search term

    const filteredData = (selectedDb === "nigeria" ? data : west_data)?.filter(item =>
        item.foodName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.details?.LocalName?.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];


    // Optional logic that checks if the route is /search/nutrient, then sets the nutrient keys
    const handleSearch = () => {
        const excludeKeys = ['Id', 'Code', 'REFID', 'Category', 'LocalName', 'EnglishName', 'ScientificName', 'FrenchNames'];
        if (location.pathname === '/search/nutrient' || location.pathname === '/search/multi-nutrient') {
            let foundFood;

            if (selectedDb === "nigeria") {
                // Search in Nigerian food database
                foundFood = data?.find(foodItem => foodItem?.foodName === searchTerm);
            } else if (selectedDb === "west_africa") {
                // Search in West African food database
                foundFood = west_data?.find(foodItem => foodItem?.foodName === searchTerm);
            }

            if (!foundFood) {
                console.log("Food not found");
                return;
            }

            // Extract nutrients from the correct structure
            const nutrientOptions = Object.entries(selectedDb === "nigeria" ? foundFood.details || {} : foundFood.nutrients || {})
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
        console.log("lots of food", selectedDb);
        setSearchTerm(food.foodName); // show the user what they clicked
        setSelectedFood(food);        // put the selected item into context
        handleSearch();
        // Optionally append the selection to the URL
        if (selectedDb === "nigeria") {
            navigate(
                `?foodName=${encodeURIComponent(food.foodName)}&localName=${encodeURIComponent(food.details.LocalName)}`,
                { replace: true }
            );

        } else if (selectedDb === "west_africa") {
            console.log("just append");
            navigate(
                `?foodName=${encodeURIComponent(food.foodName)}&localName=${encodeURIComponent(food.foodName)}`,
                { replace: true }
            );
        }
    };

    return (
        <div className='font-base-font'>
            <label htmlFor="food" className="mb-2 block font-heading-font">Search Food:</label>
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
                                    {item.foodName} {item.details?.LocalName && `- ${item.details?.LocalName}`}
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
