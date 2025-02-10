import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Welcome to Home Page</h1>
                <button
                    onClick={() => navigate('/login')}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default HomePage;
