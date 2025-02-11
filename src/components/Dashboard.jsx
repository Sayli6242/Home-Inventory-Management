import React from 'react';
import { BarChart3, Package, Clock, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';

export default function Dashboard({ items }) {
    const totalValue = items.reduce((sum, item) => sum + item.currentValue, 0);
    const itemsByCategory = items.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
    }, {});

    const recentItems = items
        .sort((a, b) => new Date(b.purchaseDate).getTime() - new Date(a.purchaseDate).getTime())
        .slice(0, 5);

    const upcomingWarranties = items
        .filter(item => item.warrantyExpiry)
        .sort((a, b) => new Date(a.warrantyExpiry).getTime() - new Date(b.warrantyExpiry).getTime())
        .slice(0, 3);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Total Items</h3>
                    <Package className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-3xl font-bold text-gray-900">{items.length}</p>
                <p className="text-sm text-gray-500 mt-2">Across all categories</p>
            </div>


            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Recent Items</h3>
                    <Clock className="w-6 h-6 text-purple-500" />
                </div>
                <ul className="space-y-2">
                    {recentItems.map(item => (
                        <li key={item.id} className="text-sm">
                            <span className="font-medium text-gray-800">{item.name}</span>
                            <span className="text-gray-500 ml-2">
                                {format(new Date(item.purchaseDate), 'MMM d, yyyy')}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Warranty Expiring</h3>
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                </div>
                <ul className="space-y-2">
                    {upcomingWarranties.map(item => (
                        <li key={item.id} className="text-sm">
                            <span className="font-medium text-gray-800">{item.name}</span>
                            <span className="text-gray-500 ml-2">
                                {format(new Date(item.warrantyExpiry), 'MMM d, yyyy')}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}