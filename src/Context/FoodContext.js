import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/fetchfood';


const FoodContext = createContext();

export const useFoodContext = () => useContext(FoodContext);

export const FoodProvider = ({ children }) => {
  const { data, error, isLoading } = useQuery(["foods"], fetchData)
  const [nutrientResult, setNutrientResult] = useState({});
  const [multiNutrientResult, setMultiNutrientResult] = useState([]);
  const [result, setResult] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWeight, setSelectedWeight] = useState(100);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [foodResults, setFoodResults] = useState({});
  const [multiFoodResults, setMultiFoodResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);
  const [selectedFood, setSelectedFood] = useState('');
  const [nutrient, setNutrient] = useState(null);

  // Add any other states or functions here
  const value = {
    data: data ? data.payload : [],
    isLoading,
    error,
    nutrientResult,
    setNutrientResult,
    multiNutrientResult,
    setMultiNutrientResult,
    result,
    setResult,
    searchQuery,
    setSearchQuery,
    selectedWeight,
    setSelectedWeight,
    filteredFoods,
    setFilteredFoods,
    foodResults,
    setFoodResults,
    multiFoodResults,
    setMultiFoodResults,
    selectedValue,
    setSelectedValue,
    selectedFood, 
    setSelectedFood,
    nutrient, 
    setNutrient
    // Any other shared states or updater functions
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
