import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData, fetchDataWest } from '../../Utils/foodb';

const FoodContext = createContext();

export const useFoodContext = () => useContext(FoodContext);

export const FoodProvider = ({ children }) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["foods"], // use `queryKey` instead of positional arguments
        queryFn: fetchData,   // use `queryFn` instead of positional arguments
    });

    const { data: westAfricaData, error: westAfricaError, isLoading: westAfricaLoading } = useQuery({
        queryKey: ["west_africa"],
        queryFn: fetchDataWest,
    });
    const [selectedFood, setSelectedFood] = useState(null);

    // If you have a multiSearchFood utility or a way to store results:
    const [multiFoodResults, setMultiFoodResults] = useState([]);
    const [nutrient, setNutrient] = useState(null);

    // Add any other states or functions here
    const value = {
        data: data ? data.payload : [],
        isLoading,
        error,
        selectedFood,
        setSelectedFood,
        multiFoodResults,
        setMultiFoodResults,
        nutrient,
        setNutrient,
        west_data: westAfricaData ? westAfricaData.payload : [],
        westAfricaError,
        westAfricaLoading,
        // Any other shared states or updater functions
    };

    return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
