import React, { createContext, useState, useContext, useEffect } from 'react';
import { FOODIMETRIC_HOST_URL } from '../Utils/host';
import { openDB } from 'idb';

const UserContext = createContext({});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [foodData, setFoodData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to get cached data from IndexedDB
    const getCachedData = async () => {
        try {
            const db = await openDB('foodimetric', 1, {
                upgrade(db) {
                    db.createObjectStore('foods');
                },
            });
            const tx = db.transaction('foods', 'readonly');
            const store = tx.objectStore('foods');
            const cachedData = await store.get('foods');
            return cachedData;
        } catch (err) {
            console.error('Failed to get cached data:', err);
            return null;
        }
    };

    // Function to fetch data from network and update cache
    const fetchAndCacheData = async () => {
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/foods`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();

            const db = await openDB('foodimetric', 1, {
                upgrade(db) {
                    db.createObjectStore('foods');
                },
            });
            const tx = db.transaction('foods', 'readwrite');
            const store = tx.objectStore('foods');
            await store.put(data, 'foods');
            await tx.done;
            return data;
        } catch (err) {
            console.error('Failed to fetch and cache data:', err);
            throw err;
        }
    };

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const cachedData = await getCachedData();
                if (cachedData) {
                    setFoodData(cachedData);
                    setLoading(false);
                } else {
                    const data = await fetchAndCacheData();
                    setFoodData(data);
                    setLoading(false);
                }
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchFoodData();
    }, []);

    return (
        <UserContext.Provider value={{ foodData, loading, error }}>
            {children}
        </UserContext.Provider>
    );
};
