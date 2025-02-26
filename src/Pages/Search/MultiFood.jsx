import React, { useState, useCallback, useEffect } from 'react';
import ProceedButton from '../../Components/Buttons/ProceedButton';
import SearchBar from '../../Components/Nav/SearchBar';
import { useFoodContext } from '../../Context/Food/FoodContext';
import { addTotal, multiSearchFood } from '../../Utils/key'; // if you have a utility
import ResultsTable from '../../Components/Modals/Table';
import { useNavigate, useOutletContext } from 'react-router';

const MultiFood = () => {
    const { data, west_data, searchData, setSearchData, selectedFood, multiFoodResults, setMultiFoodResults, setSelectedFood } = useFoodContext();
    const navigate = useNavigate();
    const { selectedDb } = useOutletContext();
    // This array holds multiple foods the user adds
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [total, settotal] = useState();

    // We'll let the user choose a weight in an <input />
    const [weight, setWeight] = useState('');

    // Handle user clicking "Add"
    const handleAddFood = useCallback(
        (e) => {
            e.preventDefault();
            setIsFormSubmitted(false);

            // If no food is selected from the SearchBar, do nothing
            if (!selectedFood) return;

            // Add the current selectedFood + weight to searchData
            setSearchData((prev) => [
                ...prev,
                { foodName: selectedFood.foodName, selectedWeight: weight },
            ]);
            setSelectedFood(null)
        },
        [selectedFood, setSearchData, setSelectedFood, weight]
    );

    // Remove a selected item by index
    const removeItem = useCallback((index) => {
        setSearchData((prev) => prev.filter((_, i) => i !== index));
    }, [setSearchData]);

    // Handle final submission
    const handleSubmit = (e) => {
        setIsFormSubmitted(true);

        // If you have a multiSearchFood function:
        const result = multiSearchFood(searchData, selectedDb === 'nigeria' ? data : west_data, selectedDb);
        console.log("result", result);

        // Map over the result to calculate and modify values as needed
        const processedResult = result.map((item) => {
            return Object.entries(item).filter(([key, value]) => value !== null).map(([key, value]) => {
                let displayValue = value;
                if (typeof value === 'number') {
                    console.log(weight, parseFloat(weight));
                    displayValue = ((parseFloat(value) * parseFloat(item.WEIGHT)) / 100).toFixed(2).toString();
                }
                return { key, value: displayValue };
            });
        });
        const totals = addTotal(processedResult);
        settotal(totals)
        setMultiFoodResults(processedResult);
        setSearchData([]);
        setWeight(0)
        navigate({ pathname: window.location.pathname, search: '' });
    };

    useEffect(() => {
        setMultiFoodResults([])
    }, [setMultiFoodResults]);

    useEffect(() => {
        setSearchData([])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="py-8 font-base-font">
            <div className="bg-white p-8 min-h-screen">
                <form className="w-full md:w-3/4 mx-auto">

                    {/* The SearchBar handles all searching & item selection internally */}
                    <SearchBar selectedDb={selectedDb} />

                    {/* Weight input */}
                    <div className="mt-4">
                        <label htmlFor="weight" className="mb-2 block font-heading-font">
                            Weight (g):
                        </label>
                        <input
                            type="number"
                            name="weight"
                            id="weight"
                            placeholder="Weight"
                            className="w-full p-2 text-sm text-black border border-gray-200 outline-none focus:outline-none bg-transparent h-12"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            min={1}
                            max={1000}
                            step="0.01"
                        />
                    </div>

                    {/* Add button + list of chosen foods */}
                    <div className="my-4">
                        <button
                            type="button"
                            onClick={handleAddFood}
                            disabled={searchData.length >= 5}
                            className="px-4 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                        >
                            Add
                        </button>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {searchData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center border border-gray-300 rounded px-2 py-1"
                                >
                                    <span className="text-sm mr-2">
                                        {`${item.foodName.slice(0, 7)}...`} ({item.selectedWeight}g)
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
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
                    </div>

                    {/* Proceed/Submit Button */}
                    <div className="w-full mx-auto mt-8">
                        <ProceedButton
                            color="#ffba08"
                            type="submit"
                            disabled={searchData.length < 2 || isFormSubmitted}
                            width="100%"
                            onClick={handleSubmit}
                        />
                    </div>
                </form>

                {/* You can display the results below if desired */}
                <div className="mt-12">
                    <h2 className="text-[30px] mb-[10px] font-heading-font font-semibold">
                        Result
                    </h2>
                    {multiFoodResults.map((item, index) =>
                        <ResultsTable results={item} total={index === multiFoodResults.length - 1 ? total : null} />
                    )}
                </div>
            </div>
        </main>
    );
};

export default MultiFood;