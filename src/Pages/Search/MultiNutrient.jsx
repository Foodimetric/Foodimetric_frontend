import React, { useState, useEffect } from 'react';
import ProceedButton from '../../Components/Buttons/ProceedButton';
import SearchBar from '../../Components/Nav/SearchBar';
import Tooltip from '@mui/material/Tooltip';
import { useFoodContext } from '../../Context/Food/FoodContext';
import { multiNutrientSearch } from '../../Utils/key';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import ResultsTable from '../../Components/Modals/Table';

const MultiNutrient = () => {
    const {
        data,
        nutrient,
    } = useFoodContext();

    const [searchParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedNutrient, setSelectedNutrient] = useState('');
    const [weight, setWeight] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [multiNutrientResult, setMultiNutrientResult] = useState();

    const handleNutrientChange = (e) => {
        setSelectedNutrient(e.target.value);
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    useEffect(() => {
        const paramFood = searchParams.get('foodName')
        if (paramFood) {
            setSearchQuery(paramFood);
        }
    }, [searchParams]);

    // Add the current selection to an array
    const handleAddItem = (e) => {
        e.preventDefault();
        setFormSubmitted(false); // allow multiple submissions if needed

        if (!selectedNutrient || !weight) return;
        const newEntry = {
            foodName: searchQuery,
            foodWeight: weight,
            nutrient: selectedNutrient,
        };
        setSearchData((prev) => [...prev, newEntry]);

        // Clear out the inputs
        setSearchQuery('');
        setSelectedNutrient('');
        setWeight('');

        navigate(location.pathname, { replace: true });
    };

    // Remove an item from searchData array
    const removeItem = (index) => {
        setSearchData((prev) => {
            const updated = [...prev];
            updated.splice(index, 1);
            return updated;
        });
    };

    // onProceed or handle form submit: do multi-nutrient search
    const handleProceed = (e) => {
        setFormSubmitted(true);
        const result = multiNutrientSearch(searchData, data);
        setMultiNutrientResult(result);
        setSearchData([]);
    };

    // ---- Render ----
    return (
        <main className="py-8">
            <div className="bg-white p-8 min-h-screen">
                <form className="w-full md:w-3/4 mx-auto">
                    <SearchBar />
                    {/* Nutrient Selector */}
                    <div className="mb-4">
                        <label htmlFor="nutrient" className="mb-2 block">
                            Nutrients:
                        </label>
                        <select
                            id="nutrient"
                            className="h-12 block w-full p-2 border border-gray-300 rounded shadow-sm focus:border-gary-200 outline-none focus:outline-none"
                            value={selectedNutrient}
                            onChange={handleNutrientChange}
                        >
                            <option value="">Select a nutrient</option>
                            {nutrient?.map((option, index) => (
                                <option key={`${option}-${index}`} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Weight Input */}
                    <div>
                        <label htmlFor="weight" className="mb-2 block">
                            Weight:
                        </label>
                        <input
                            type="number"
                            name="weight"
                            id="weight"
                            placeholder="Weight"
                            className="w-full p-2 text-sm text-black border border-gray-200 outline-none focus:outline-none bg-transparent h-12"
                            value={weight}
                            onChange={handleWeightChange}
                            min={1}
                            max={1000}
                            step="0.01"
                        />
                    </div>

                    {/* Button to Add Another Food+Nutrient+Weight */}
                    <div className="flex justify-end my-4">
                        <button
                            onClick={handleAddItem}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                            disabled={searchData.length === 5} // if you want to limit to 5
                        >
                            Add
                        </button>
                    </div>

                    {/* Display the items to be searched */}
                    {searchData?.length > 0 && (
                        <div className="my-4 flex flex-wrap gap-4">
                            {searchData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center border border-orange-400 rounded px-2 py-1 text-sm shadow-sm"
                                >
                                    <span className="mr-2">
                                        {item.foodName.slice(0, 7)}...
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 100 100"
                                        onClick={() => removeItem(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <line
                                            x1="10"
                                            y1="10"
                                            x2="90"
                                            y2="90"
                                            stroke="red"
                                            strokeWidth="5"
                                        />
                                        <line
                                            x1="90"
                                            y1="10"
                                            x2="10"
                                            y2="90"
                                            stroke="red"
                                            strokeWidth="5"
                                        />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Proceed Button (submit the form) */}
                    <div className="w-full mx-auto mt-8">
                        <ProceedButton color="#ffba08" onClick={handleProceed} width="100%" disabled={searchData.length < 2 || formSubmitted} />
                    </div>
                </form>

                {/* Results Section */}
                <div className="mt-12">
                    <h2 className="text-[30px] mb-[10px] font-heading-font font-semibold">
                        Result
                    </h2>
                    <div>
                        <ResultsTable results={multiNutrientResult} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MultiNutrient;
