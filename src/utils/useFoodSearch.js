import {useCallback } from 'react';
import { useFoodContext } from '../Context/FoodContext';

export const useFoodSearch = () => {
    const { data, setFilteredFoods, setSelectedWeight, setSearchQuery } = useFoodContext()
    // Update search query and filter results
    const handleSearchChange = useCallback((value) => {
        setSearchQuery(value);
        if (!value.trim()) {
            setFilteredFoods([]);
        } else {
            const filtered = data.filter((food) =>
                food.foodName.toLowerCase().includes(value.toLowerCase()) ||
                (food.details.LocalName && food.details.LocalName.toLowerCase().includes(value.toLowerCase()))
            );
            setFilteredFoods(filtered);
        }
    }, [data, setFilteredFoods, setSearchQuery]);

    const handleGroupChange = useCallback((value) => {
        setSearchQuery(value);
        if (!value.trim()) {
            setFilteredFoods(data);
        } else {
            const filtered = data.filter((food) =>
                food.details?.Category.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredFoods(filtered);
        }
    }, [data, setFilteredFoods, setSearchQuery]);

    // Select an item from filtered results
    const selectItem = useCallback((itemName) => {
        setSearchQuery(itemName);
        setFilteredFoods([]);
    }, [setFilteredFoods, setSearchQuery]);

    // Handle weight selection
    const handleWeightChange = useCallback((e) => {
        setSelectedWeight(e.target.value);
    }, [setSelectedWeight]);

    return {
        handleSearchChange,
        selectItem,
        handleWeightChange,
        handleGroupChange
    };
};
