import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const isUser = useAuth()
    return (
        isUser ? children : <Navigate to="/"></Navigate>
    );
};

export default PrivateRoutes;