import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import Login from '../src/components/auth/SignIn';
import Register from '../src/components/auth/SignUp';
import HomePage from '../src/pages/HomePage';
import PublicRoute from './components/auth/PublicRoute';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => {
    return (
        <AuthProvider>
            <div className="min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path="/signup" element={<PublicRoute><Register /></PublicRoute>} />
                    <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </AuthProvider>
    );
};

export default App;
