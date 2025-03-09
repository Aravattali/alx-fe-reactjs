import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = false;  // Simulate user authentication status

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;  // Redirect to home if not authenticated
    }

    return children;  // Render children components (Profile routes)
};

export default ProtectedRoute;