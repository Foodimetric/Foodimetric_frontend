import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';
// import { openDB } from 'idb';
import { useAuth } from '../AuthContext';
import showToast from '../../Utils/toast';

const UserContext = createContext({});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const { user } = useAuth()
    // const [foodData, setFoodData] = useState([]);
    const [foodEntries, setFoodEntries] = useState([]);
    const [calculations, setCalculations] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [, setError] = useState(null);
    const [analytics, setAnalytics] = useState(null);

    // Function to get cached data from IndexedDB
    // const getCachedData = async () => {
    //     try {
    //         const db = await openDB('foodimetric', 1, {
    //             upgrade(db) {
    //                 db.createObjectStore('foods');
    //             },
    //         });
    //         const tx = db.transaction('foods', 'readonly');
    //         const store = tx.objectStore('foods');
    //         const cachedData = await store.get('foods');
    //         return cachedData;
    //     } catch (err) {
    //         console.error('Failed to get cached data:', err);
    //         return null;
    //     }
    // };

    // Function to fetch data from network and update cache
    // const fetchAndCacheData = async () => {
    //     try {
    //         const response = await fetch(`${FOODIMETRIC_HOST_URL}/foods`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data');
    //         }

    //         const data = await response.json();

    //         const db = await openDB('foodimetric', 1, {
    //             upgrade(db) {
    //                 db.createObjectStore('foods');
    //             },
    //         });
    //         const tx = db.transaction('foods', 'readwrite');
    //         const store = tx.objectStore('foods');
    //         await store.put(data, 'foods');
    //         await tx.done;
    //         return data;
    //     } catch (err) {
    //         console.error('Failed to fetch and cache data:', err);
    //         throw err;
    //     }
    // };

    const fetchCalculations = useCallback(async () => {
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/calculations/user/${user._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`, // Adjust token retrieval as needed
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch calculations');
            }

            const data = await response.json();
            console.log("cal history", data);
            setCalculations(data.payload.reverse());
        } catch (err) {
            setError(err.message);
        }
    }, [user?._id, user?.token, setCalculations, setError]); // Add dependencies here
    const handleDelete = async (id) => {
        // Confirm delete action
        if (window.confirm("Are you sure you want to delete this calculation?")) {
            try {
                // Send DELETE request to the server
                const response = await fetch(`${FOODIMETRIC_HOST_URL}/calculations/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to delete calculation');
                }
                fetchCalculations();
                showToast('info', 'Calculation deleted successfully!');
            } catch (err) {
                console.error('Error deleting calculation:', err);
                showToast('error', 'Failed to delete calculation');
            }
        }
    };


    const fetchFoodEntries = useCallback(async () => {
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/food_diary/diary/${user._id}`);

            if (!response.ok) {
                throw new Error('Failed to fetch food entries');
            }

            const foodEntries = await response.json();
            setFoodEntries(foodEntries);
            // Process food entries as needed

        } catch (error) {
            console.error('Error fetching food entries:', error.message);
            showToast('error', 'An error occurred while fetching food entries');
        }
    }, [user?._id, setFoodEntries]); // Add all necessary dependencies



    const handleDiary = async (newLog) => {
        // Create a new food entry object from form data
        const foodData = {
            user_id: user._id, // Replace with actual user ID
            date: newLog.date, // Current date
            time: newLog.time, // Replace with the form time value
            foodEaten: newLog.food, // Replace with the form food name
            quantity: newLog.quantity, // Replace with the form quantity
            additionalInfo: newLog.additionalInfo, // Replace with the form additional info if any
        };

        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/food_diary`, {
                method: 'POST', // POST request to save the food entry
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(foodData), // Send the food data as the request body
            });

            if (!response.ok) {
                throw new Error('Failed to save food entry');
            }

            const responseData = await response.json(); // Optional, to handle any response data
            console.log('Food entry saved:', responseData);
            fetchFoodEntries()
            // Optionally, reset form fields or provide feedback
            showToast('success', 'Food entry saved successfully');
        } catch (error) {
            console.error('Error saving food entry:', error.message);
            showToast('error', 'An error occurred while saving the food entry');
        }
    };

    const handleDeleteFood = async (foodId) => {
        if (window.confirm("Are you sure you want to delete this food log?")) {
            try {
                const response = await fetch(`${FOODIMETRIC_HOST_URL}/food_diary/diary/${foodId}`, {
                    method: 'DELETE',
                });

                // Check if the response was successful
                if (!response.ok) {
                    // If the response is not OK, throw an error with the status text
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to delete food entry.');
                }

                // If the deletion is successful, refresh the food entries
                fetchFoodEntries();
            } catch (error) {
                // Handle any errors that occur during the fetch or in the process
                console.error('Error deleting food log:', error);
                showToast('error', `Error: ${error.message}`); // Show error message to the user
            }
        }
    };


    const editDiary = async (currentLogId, newLog) => {
        // Make PUT request to update the log in the database
        const response = await fetch(`${FOODIMETRIC_HOST_URL}/food_diary/diary/${currentLogId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: newLog.date,
                time: newLog.time,
                foodEaten: newLog.food, // Matching the field name in the DB
                quantity: newLog.quantity,
                additionalInfo: newLog.additionalInfo,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            // Update the foodEntries state with the updated log
            fetchFoodEntries();
        } else {
            showToast('error', 'Error updating the food log: ' + data.message);
        }
    };


    const fetchAnalytics = useCallback(async () => {
        if (!user || !user.token) return; // Ensure user is logged in

        try {
            console.log("who called");
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/platform/analytics`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`, // Include Bearer token for authentication
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch analytics");
            }

            const data = await response.json();
            setAnalytics(data.data); // Update state with analytics data
        } catch (error) {
            console.error("Error fetching analytics:", error.message);
        }
    }, [user]); // Dependencies for memoization

    useEffect(() => {
        // const fetchFoodData = async () => {
        //     try {
        //         const cachedData = await getCachedData();
        //         if (cachedData) {
        //             setFoodData(cachedData);
        //             setLoading(false);
        //         } else {
        //             const data = await fetchAndCacheData();
        //             setFoodData(data);
        //             setLoading(false);
        //         }
        //     } catch (err) {
        //         setError(err);
        //         setLoading(false);
        //     }
        // };

        // fetchFoodData();

        if (user) {
            fetchCalculations();
            fetchFoodEntries()
            fetchAnalytics();

        }

    }, [fetchAnalytics, fetchCalculations, fetchFoodEntries, user]);



    return (
        <UserContext.Provider value={{ analytics, calculations, handleDelete, foodEntries, handleDiary, handleDeleteFood, editDiary }}>
            {children}
        </UserContext.Provider>
    );
};
