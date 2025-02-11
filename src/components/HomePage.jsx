import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusCircle, Search, LayoutGrid, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const HomePage = () => {
    const navigate = useNavigate();


    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Home Inventory Management</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Keep track of your belongings with ease and organization
                </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <Link to="/add">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <PlusCircle className="h-12 w-12 mb-4 text-blue-500" />
                            <h3 className="font-semibold mb-2">Add Item</h3>
                            <p className="text-sm text-gray-600">Add new items to your inventory</p>
                        </CardContent>
                    </Card>
                </Link>

                <Link to="/search">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <Search className="h-12 w-12 mb-4 text-green-500" />
                            <h3 className="font-semibold mb-2">Search Items</h3>
                            <p className="text-sm text-gray-600">Find items in your inventory</p>
                        </CardContent>
                    </Card>
                </Link>

                <Link to="/categories">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <LayoutGrid className="h-12 w-12 mb-4 text-purple-500" />
                            <h3 className="font-semibold mb-2">Categories</h3>
                            <p className="text-sm text-gray-600">Browse by category</p>
                        </CardContent>
                    </Card>
                </Link>

                <Link to="/settings">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <Settings className="h-12 w-12 mb-4 text-orange-500" />
                            <h3 className="font-semibold mb-2">Settings</h3>
                            <p className="text-sm text-gray-600">Manage your preferences</p>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{stats.totalItems}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{stats.categories}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recently Added</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {stats.recentlyAdded.map(item => (
                                <div key={item.id} className="flex items-center justify-between">
                                    <span className="text-sm">{item.name}</span>
                                    <span className="text-xs text-gray-500">{item.date}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Getting Started */}
            <Card>
                <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Welcome to your home inventory management system. Here's how to get started:
                        </p>
                        <ol className="list-decimal ml-6 space-y-2">
                            <li>Click "Add Item" to start building your inventory</li>
                            <li>Use categories to organize your items</li>
                            <li>Search for items when you need to find something</li>
                            <li>Track quantities and locations of your belongings</li>
                        </ol>
                        <div className="mt-6">
                            <Button asChild>
                                <Link to="/add">Start Adding Items</Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};


export default HomePage