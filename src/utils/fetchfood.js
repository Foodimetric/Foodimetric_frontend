import { FOODIMETRIC_HOST_URL } from "./getData";
import { openDB } from "idb";

// Define a function to open the IndexedDB database and get data from it.
const getCachedData = async () => {
  const db = await openDB('foodimetric', 1, {
    upgrade(db) {
      db.createObjectStore('foods');
    },
  });
  const tx = db.transaction('foods', 'readonly');
  const store = tx.objectStore('foods');

  // Check if data exists in the cache.
  const cachedData = await store.get('foods');
//   await db.close();
  return cachedData;
  
};

// Define a function to fetch data from the network and update the cache.
const fetchAndCacheData = async () => {
  const response = await fetch(`${FOODIMETRIC_HOST_URL}/foods/`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  
  // Open the IndexedDB database and store the fetched data in the cache.
  const db = await openDB('foodimetric', 1, {
    upgrade(db) {
      db.createObjectStore('foods');
    },
  });
  const tx = db.transaction('foods', 'readwrite');
  const store = tx.objectStore('foods');
  await store.put(data, 'foods'); // Store the data in the cache.
  await tx.done; // Wait for the transaction to complete.
//   await db.close();
  return data;
};

// Export a function that fetches data using the cache-first approach.
export const fetchData = async () => {
  // Try to get data from the cache.
  const cachedData = await getCachedData();

  if (cachedData) {
    return cachedData; // Return cached data if available.
  }

  // If data is not in the cache or outdated, fetch it from the network and update the cache.
  return fetchAndCacheData();
};
