import React, { createContext, useState, useContext } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app and manage authentication state
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const fakeUsername = 'user';
  const fakePassword = 'pass';

  // Function to log in
  const login = (username, password) => {
    if (username === fakeUsername && password === fakePassword) {
      setIsLoggedIn(true);
    }
  };

  // Function to log out
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
