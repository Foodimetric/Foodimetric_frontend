import React, { useState, useCallback, useEffect } from 'react';
import ProceedButton from '../../Components/Buttons/ProceedButton';
import SearchBar from '../../Components/Nav/SearchBar';
import { useFoodContext } from '../../Context/Food/FoodContext';
import { useLocation, useNavigate, useOutletContext } from 'react-router';
import { extractUnit, findKeyByWord } from '../../Utils/key';
import ResultsTable from '../../Components/Modals/Table';
import showToast from '../../Utils/toast';

const Nutrient = () => {
    const { nutrient, data, setNutrient, west_data } = useFoodContext();
    const [selectedNutrient, setSelectedNutrient] = useState('');
    const { selectedDb } = useOutletContext();
    const [result, setResult] = useState(null);
    const [weight, setWeight] = useState('');
    const location = useLocation(); // Hook to access the URL
    const navigate = useNavigate();


    const handleNutrientChange = (e) => {
        setSelectedNutrient(e.target.value);
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };
    console.log("selected nutrient", selectedNutrient);


    const handleProceed = useCallback(() => {
        if (!selectedNutrient || !weight) {
            showToast('error', 'Please select a nutrient and enter a weight.');
            return;
        }

        const queryParams = new URLSearchParams(location.search); // Get query parameters from the URL
        const searchQuery = queryParams.get('foodName'); // Get 'foodName' parameter from URL
        let foundFood;

        if (selectedDb === "nigeria") {
            // Search in Nigerian food database
            foundFood = data?.find(foodItem => foodItem?.foodName === searchQuery);
        } else if (selectedDb === "west_africa") {
            // Search in West African food database
            foundFood = west_data?.find(foodItem => foodItem?.foodName === searchQuery);
        }

        console.log("found the nutrient", foundFood);

        if (foundFood && selectedNutrient) {
            const data_parse = selectedDb === "west_africa" ? foundFood?.nutrients || {} : foundFood?.details || {};
            const selectedFoodDetails = findKeyByWord(data_parse, selectedNutrient);

            let nutrientValue;
            if (selectedDb === "west_africa") {
                const rawValue = data_parse[selectedFoodDetails]; // e.g., "596(141)"
                let kcalValue;
                if (rawValue && rawValue.includes("(") && rawValue.includes(")")) {
                    const match = rawValue.match(/\((\d+(\.\d+)?)\)/); // Matches the number inside parentheses
                    if (match) {
                        kcalValue = match[1]; // Extracts the kcal value
                        nutrientValue = ((parseFloat(weight) * 100) / parseFloat(kcalValue)).toFixed(2).toString();
                    }

                }
            }
            nutrientValue = ((parseFloat(weight) * 100) / parseFloat(data_parse[selectedFoodDetails])).toFixed(2).toString();
            const unit = extractUnit(selectedNutrient)
            const newResult = {
                foodName: searchQuery,
                foodQuantity: nutrientValue,
                nutrientName: selectedNutrient,
                nutrientQuantity: `${weight} ${unit}`,
            };
            setResult([newResult]);
        } else {
            console.log('Food not found in the data.');
        }

        setWeight('');
        setSelectedNutrient('');
        navigate({ pathname: window.location.pathname, search: '' });
    }, [data, location.search, navigate, selectedDb, selectedNutrient, weight, west_data]);

    useEffect(() => {
        setNutrient(null)
    }, [setNutrient]);

    return (
        <main className="py-8 font-base-font">
            <div className="bg-white p-8 min-h-screen">
                <form className="w-full md:w-3/4 mx-auto">
                    <SearchBar selectedDb={selectedDb} />
                    <div className="mb-4">
                        <label htmlFor="nutrient" className="mb-2 block font-heading-font">
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
                    <div>
                        <label htmlFor="weight" className="mb-2 block font-heading-font">
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
                        />
                    </div>
                    <div className="w-full mx-auto mt-8">
                        <ProceedButton
                            color="#ffba08"
                            type="button"
                            auth="authorized"
                            onClick={handleProceed}
                            width="100%"
                        />
                    </div>
                </form>
                <div className="mt-12">
                    <h2 className="text-[30px] mb-[10px] font-heading-font font-semibold">Result</h2>
                    {result && (
                        <ResultsTable results={result} />)
                    }
                </div>
                {result && <div className="mt-8 p-4 border-t border-gray-200">
                    <h3 className="text-[24px] mb-4 font-heading-font font-semibold text-[#555]">Interpretation</h3>
                    <p className="text-[16px] leading-relaxed text-[#333]">
                        This indicates that you need to consume <strong>{result[0].foodQuantity}g</strong> of{" "}
                        <strong>{result[0].foodName}</strong> to obtain <strong>{result[0].nutrientQuantity}</strong> of{" "}
                        <strong>{result[0].nutrientName}</strong>.
                    </p>
                </div>}
            </div>
        </main>
    );
};

export default Nutrient;
