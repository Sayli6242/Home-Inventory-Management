import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardPage = () => {
    const [inventory, setInventory] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentItem, setCurrentItem] = useState({ name: '', location: '', category: '', purchaseDate: '', value: '', notes: '' });
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('/api/items');
            setInventory(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentItem({ ...currentItem, [name]: value });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => setSelectedImage(event.target.result);
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentItem.id) {
                await axios.put(`/api/items/${currentItem.id}`, { ...currentItem, image: selectedImage });
            } else {
                await axios.post('/api/items', { ...currentItem, image: selectedImage });
            }
            fetchItems();
            setShowModal(false);
            setCurrentItem({ name: '', location: '', category: '', purchaseDate: '', value: '', notes: '' });
            setSelectedImage(null);
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setSelectedImage(item.image);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/items/${id}`);
            fetchItems();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add Item</button>
            <ul>
                {inventory.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.location} - {item.category}
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <h3>{currentItem.id ? 'Edit Item' : 'Add New Item'}</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" value={currentItem.name} onChange={handleChange} placeholder="Item Name" required />
                            <input type="text" name="location" value={currentItem.location} onChange={handleChange} placeholder="Location" />
                            <input type="text" name="category" value={currentItem.category} onChange={handleChange} placeholder="Category" />
                            <input type="date" name="purchaseDate" value={currentItem.purchaseDate} onChange={handleChange} />
                            <input type="number" name="value" value={currentItem.value} onChange={handleChange} placeholder="Value" />
                            <textarea name="notes" value={currentItem.notes} onChange={handleChange} placeholder="Notes"></textarea>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                            {selectedImage && <img src={selectedImage} alt="Preview" height="50" />}
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
