import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PublicRoutes = ({ children }) => {
    const isUser = useAuth()
    return (
        !isUser ? children : <Navigate to="/inbox"></Navigate>
    );
};

export default PublicRoutes;