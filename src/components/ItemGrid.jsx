import React from 'react';
import { Edit2, Trash2, Calendar, MapPin, Tag, DollarSign } from 'lucide-react';
import { format } from 'date-fns';

export default function ItemGrid({ items, onEdit, onDelete }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
                <div key={item.id} className="card overflow-hidden animate-fade-in">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                        {item.imageUrl ? (
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                        ) : (
                            <div className="w-full h-48 flex items-center justify-center bg-gray-100">
                                <span className="text-gray-400">No image</span>
                            </div>
                        )}
                    </div>

                    <div className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-800">
                                {item.category}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="w-4 h-4 mr-2" />
                                {item.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="w-4 h-4 mr-2" />
                                {format(new Date(item.purchaseDate), 'MMM d, yyyy')}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <DollarSign className="w-4 h-4 mr-2" />
                                Current Value: ${item.currentValue.toLocaleString()}
                            </div>
                            {item.serialNumber && (
                                <div className="flex items-center text-sm text-gray-600">
                                    <Tag className="w-4 h-4 mr-2" />
                                    SN: {item.serialNumber}
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end space-x-2 pt-4 border-t">
                            <button
                                onClick={() => onEdit(item)}
                                className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                            >
                                <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => onDelete(item.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}