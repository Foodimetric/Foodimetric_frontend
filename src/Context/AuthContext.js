import React, { createContext, useContext, useState, useEffect } from 'react';
import { FOODIMETRIC_HOST_URL } from '../utils/getData';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('loading'); // Possible values: 'loading', 'authenticated', 'unauthenticated'
  const [accessToken, setAccessToken] = useState(localStorage.getItem("Foodie-token"));

  useEffect(() => {
    const checkAuthenticationStatus = async () => {
      try {
        if (!accessToken) {
          setStatus("unauthenticated");
          return;
        }
        if (accessToken) {
          setUser(true); // Assuming you want to store the user data
          setStatus("authenticated");
        } else {
          setStatus("unauthenticated");
        }
      } catch (error) {
      console.error("Error checking authentication status:", error);
      setStatus("unauthenticated");
    }
  };

  checkAuthenticationStatus();
}, [accessToken]); // Empty dependency array means this effect runs once on mount

const value = { user, setUser, status, setStatus, accessToken, setAccessToken };

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
