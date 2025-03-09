// src/components/ProtectedRoute.jsx
import React, { createContext, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

// Create an AuthContext to provide authentication status
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component that provides authentication state to the rest of the app
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state for authentication

    const login = () => setIsAuthenticated(true); // Function to log in
    const logout = () => setIsAuthenticated(false); // Function to log out

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// ProtectedRoute component that checks if the user is authenticated
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Access authentication state

    // If not authenticated, redirect to home page (or login page)
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // If authenticated, render the protected route
    return children;
};

export default ProtectedRoute;
