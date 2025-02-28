import React, { useState, useEffect } from 'react';
import { useFoodContext } from '../../Context/Food/FoodContext';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'; // Import useLocation to get URL query params
import ProceedButton from '../../Components/Buttons/ProceedButton';
import SearchBar from '../../Components/Nav/SearchBar';
import ResultsTable from '../../Components/Modals/Table'
import { cleanAndConvertFoodData } from '../../Utils/key';
import { Helmet } from 'react-helmet-async';

export const Food = () => {
    const { data, west_data } = useFoodContext();
    const { selectedDb } = useOutletContext();
    const [weight, setWeight] = useState('');  // State for weight input
    const [selectedFood, setSelectedFood] = useState(''); // State to store selected food
    const navigate = useNavigate(); // useNavigate for React Router v6+
    const location = useLocation(); // Hook to access the URL
    const [results, setResults] = useState([]); // State for processed results


    // Extract food from URL query parameters when the component mounts or the URL changes
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search); // Get query parameters from the URL
        const foodFromUrl = queryParams.get('foodName'); // Get 'food' parameter from URL
        if (foodFromUrl) {
            setSelectedFood(foodFromUrl); // Set selected food based on the URL
        }
    }, [location.search]); // Trigger the effect when the URL changes

    const handleProceed = () => {
        console.log("who called bayi");

        let foundFood;

        if (selectedDb === "nigeria") {
            // Search in Nigerian food database
            foundFood = data?.find(foodItem => foodItem?.foodName === selectedFood);
        } else if (selectedDb === "west_africa") {
            // Search in West African food database
            foundFood = west_data?.find(foodItem => foodItem?.foodName === selectedFood);
        }

        const excludeKeys = ['Id', 'Code', 'REFID', "FOOD CODE", 'EDIBLE1'];

        // If no food is found, return an empty array
        if (!foundFood) return [];

        const details = selectedDb === "west_africa" ? foundFood?.nutrients || {} : foundFood?.details || {};
        // Ensure weight is a valid number before proceeding
        const parsedWeight = parseFloat(weight);
        if (isNaN(parsedWeight) || parsedWeight <= 0) {
            console.log('Invalid weight');
            return [];
        }

        const processedDetails = selectedDb === "west_africa" ? cleanAndConvertFoodData(details) : details;

        // Reduce the details object, skipping excluded keys or null values
        const result = [
            ...Object.entries(processedDetails).reduce((acc, [key, value]) => {
                if (excludeKeys.includes(key) || value === null) return acc;

                let processedValue = value;
                if (typeof value === 'number') {
                    // Perform the calculation using weight and format the result
                    processedValue = ((parseFloat(value) * parsedWeight) / 100).toFixed(2).toString();
                }

                acc.push({ key, value: processedValue });
                return acc;
            }, []),
            { key: 'Weight', value: `${parsedWeight} g` }, // Add weight as the first row
        ];

        setResults(result)
        // Reset weight after proceeding
        setWeight(0);
        navigate({ pathname: window.location.pathname, search: '' });

        console.log("result", result);
    };


    const handleWeightChange = (e) => {
        setWeight(e.target.value); // Update weight state as the user types
    };

    console.log("we are looking for slected db", selectedDb);

    return (
        <main className="py-8">
            <Helmet>
                <title>Food Search - Explore Nutritional Information | Foodimetric</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <div className="bg-white p-8 min-h-screen">
                <form className="w-full md:w-3/4 mx-auto">
                    <SearchBar selectedDb={selectedDb} />
                    <div>
                        <label htmlFor="weight" className="mb-2 block font-heading-font">Weight(g):</label>
                        <input
                            type="number"
                            name="weight"
                            id="weight"
                            placeholder="Weight"
                            className="w-full font-base-font p-2 text-sm text-black border border-gray-200 outline-none focus:outline-none bg-transparent h-12"
                            value={weight} // Bind the value of the input to the state
                            onChange={handleWeightChange} // Update the state when the user types
                        />
                    </div>
                    <div className="w-full mx-auto mt-8">
                        <ProceedButton color="#ffba08" onClick={handleProceed} width="100%" />
                    </div>
                </form>
                <div className="mt-12">
                    <h2 className="text-[30px] mb-[10px] font-heading-font font-semibold">Result</h2>

                    {results.length > 0 && (
                        <ResultsTable results={results} tableHeadColor="#ffba08" />
                    )}
                </div>
            </div>
        </main>
    );
};