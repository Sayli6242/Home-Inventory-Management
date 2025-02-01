import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider } from '../src/components/auth/AuthContext';
import { Login } from '../src/components/auth/SignIn';
import { Register } from '../src/components/auth/SignUp';
import { ResetPassword } from '../src/components/auth/ResetPassword';
import { ForgotPassword } from '../src/components/auth/ForgetPassword';
import { PublicRoute } from '../src/components/auth/PublicRoute';
import { ProtectedRoute } from '../src/components/auth/ProtectedRoute';
import { Home } from '../src/components/HomePage';


const router = createBrowserRouter([
    {
        path: '/login',
        element: <PublicRoute><Login /></PublicRoute>
    },
    {
        path: '/signup',
        element: <PublicRoute><Register /></PublicRoute>
    },
    {
        path: '/reset-password',
        element: <PublicRoute><ResetPassword /></PublicRoute>
    },
    {
        path: '/forget-password',
        element: <PublicRoute><ForgotPassword /></PublicRoute>
    },
    {
        path: '/Home',
        element: <PublicRoute><HomePage /></PublicRoute>
    },
    {
        path: '/Dashboard',
        element: <ProtectedRoute><Home /></ProtectedRoute>
    },
    {
        path: '/',
        element: <Navigate to="/Home" replace />
    },
    {
        path: '*',
        element: <Navigate to="/Home" replace />
    }
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