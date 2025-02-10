import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './SignIn';
import Register from './SignUp';
import HomePage from './HomePage';
import { PublicRoute } from './PublicRoute';
import { ProtectedRoute } from './ProtectedRoute';

const router = createBrowserRouter([
    { path: '/login', element: <PublicRoute><Login /></PublicRoute> },
    { path: '/signup', element: <PublicRoute><Register /></PublicRoute> },
    { path: '/home', element: <ProtectedRoute><HomePage /></ProtectedRoute> },
    { path: '/', element: <Navigate to="/login" replace /> },
    { path: '*', element: <Navigate to="/home" replace /> }
]);

const App = () => {
    return (
        <AuthProvider>
            <div className="min-h-screen bg-gray-50">
                <RouterProvider router={router} />
            </div>
        </AuthProvider>
    );
};

export default App;
