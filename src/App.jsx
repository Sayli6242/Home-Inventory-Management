import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Home } from 'lucide-react';

const router = createBrowserRouter([

  {
    path: '/Home',
    element: <HomePage />
  },
  {
    path: '/',
    element: <Navigate to="/Home" replace />
  },
  {
    path: '*',
    element: <Navigate to="/Home" replace />
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App


