import React, { useState, useCallback, useEffect } from 'react';
import ProceedButton from '../../Components/Buttons/ProceedButton';
import SearchBar from '../../Components/Nav/SearchBar';
import { useFoodContext } from '../../Context/Food/FoodContext';
import { useLocation, useNavigate } from 'react-router';
import { findKeyByWord } from '../../Utils/key';
import ResultsTable from '../../Components/Modals/Table';

const Nutrient = () => {
    const { nutrient, data, setNutrient } = useFoodContext();
    const [selectedNutrient, setSelectedNutrient] = useState('');
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

    const handleProceed = useCallback(() => {
        if (!selectedNutrient || !weight) {
            alert('Please select a nutrient and enter a weight.');
            return;
        }

        const queryParams = new URLSearchParams(location.search); // Get query parameters from the URL
        const searchQuery = queryParams.get('foodName'); // Get 'foodName' parameter from URL
        const foundFood = data.find(foodItem => foodItem.foodName === searchQuery);

        if (foundFood && selectedNutrient) {
            const selectedFoodDetails = findKeyByWord(foundFood.details, selectedNutrient);
            const nutrientValue = ((parseFloat(weight) * 100) / parseFloat(foundFood.details[selectedFoodDetails])).toFixed(2).toString();
            const newResult = {
                foodName: searchQuery,
                foodQuantity: nutrientValue,
                nutrientName: selectedNutrient,
                nutrientQuantity: weight,
            };
            setResult([newResult]);
        } else {
            console.log('Food not found in the data.');
        }

        setWeight('');
        setSelectedNutrient('');
        navigate({ pathname: window.location.pathname, search: '' });
    }, [data, location.search, navigate, selectedNutrient, weight]);

    useEffect(() => {
        setNutrient(null)
    }, [setNutrient]);

    return (
        <main className="py-8">
            <div className="bg-white p-8 min-h-screen">
                <form className="w-full md:w-3/4 mx-auto">
                    <SearchBar />
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
                        <strong>{result[0].foodName}</strong> to obtain <strong>{result[0].nutrientQuantity}g</strong> of{" "}
                        <strong>{result[0].nutrientName}</strong>.
                    </p>
                </div>}
            </div>
        </main>
    );
};

export default Nutrient;
