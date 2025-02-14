import React from 'react';
import { FolderPlus, BarChart2, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <FolderPlus className="h-8 w-8 text-emerald-600" />
                            <span className="ml-2 text-xl font-semibold text-slate-800">Inventify</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">Features</button>
                            <button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">How it Works</button>
                            <button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">Pricing</button>
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section with Split Design */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 bg-slate-50">
                        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                            <div className="mx-auto max-w-7xl lg:px-8">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                        <div className="lg:py-24">
                                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-slate-900 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                                                <span className="block">Streamline Your</span>
                                                <span className="block text-emerald-600">Home Inventory</span>
                                            </h1>
                                            <p className="mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                                Organize, track, and manage your possessions with a powerful yet simple inventory management system designed for modern homes.
                                            </p>
                                            <div className="mt-10 sm:mt-12">
                                                <button
                                                    onClick={() => navigate('/dashboard')}
                                                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                                                >
                                                    Get Started Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 lg:mt-0 lg:relative">
                                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0">
                                            {/* Abstract Inventory Illustration */}
                                            <div className="bg-emerald-100 rounded-xl overflow-hidden shadow-xl">
                                                <div className="h-64 sm:h-72 md:h-80 lg:h-96 w-full bg-gradient-to-br from-emerald-600 to-teal-500 p-6 flex items-end">
                                                    {/* Simplified Dashboard UI Mockup */}
                                                    <div className="bg-white rounded-lg shadow-lg w-full h-3/4 p-3">
                                                        <div className="w-full flex justify-between items-center mb-4">
                                                            <div className="h-3 w-24 bg-slate-200 rounded"></div>
                                                            <div className="h-6 w-6 bg-emerald-100 rounded-full"></div>
                                                        </div>
                                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                                            <div className="bg-slate-100 rounded h-16"></div>
                                                            <div className="bg-slate-100 rounded h-16"></div>
                                                            <div className="bg-slate-100 rounded h-16"></div>
                                                        </div>
                                                        <div className="h-2 w-full bg-slate-100 rounded mb-3"></div>
                                                        <div className="h-2 w-3/4 bg-slate-100 rounded mb-3"></div>
                                                        <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section with Icons */}
            <div className="bg-white py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Why Choose Our System</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-600 sm:mt-4">
                            Designed to make home inventory management effortless and efficient.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-400 blur"></div>
                            <div className="relative bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                                    <Zap className="h-6 w-6 text-emerald-600" />
                                </div>
                                <h3 className="text-lg font-medium text-slate-900">Fast & Intuitive</h3>
                                <p className="mt-2 text-base text-slate-600">
                                    Quickly add, categorize, and find items with our streamlined user interface.
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-400 blur"></div>
                            <div className="relative bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                                    <BarChart2 className="h-6 w-6 text-emerald-600" />
                                </div>
                                <h3 className="text-lg font-medium text-slate-900">Smart Analytics</h3>
                                <p className="mt-2 text-base text-slate-600">
                                    Get insights into your belongings with powerful reporting and visualization tools.
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-400 blur"></div>
                            <div className="relative bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                                </div>
                                <h3 className="text-lg font-medium text-slate-900">Secure & Reliable</h3>
                                <p className="mt-2 text-base text-slate-600">
                                    Keep your inventory data safe with enterprise-grade security and regular backups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-slate-900">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        <span className="block">Ready to get organized?</span>
                        <span className="block text-emerald-400">Start your inventory today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-emerald-400 hover:bg-emerald-500 transition-colors duration-200"
                            >
                                Get Started
                            </button>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-400 bg-slate-800 hover:bg-slate-700 transition-colors duration-200">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;