import React from 'react';

const ItemModal = ({ showModal, onClose, onSubmit, item, onChange, onImageChange, selectedImage }) => {
    if (!showModal) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h3>{item.id ? 'Edit Item' : 'Add New Item'}</h3>
                <form onSubmit={onSubmit}>
                    <input type="text" name="name" value={item.name} onChange={onChange} placeholder="Item Name" required />
                    <input type="text" name="location" value={item.location} onChange={onChange} placeholder="Location" />
                    <input type="text" name="category" value={item.category} onChange={onChange} placeholder="Category" />
                    <input type="date" name="purchaseDate" value={item.purchaseDate} onChange={onChange} />
                    <input type="number" name="value" value={item.value} onChange={onChange} placeholder="Value" />
                    <textarea name="notes" value={item.notes} onChange={onChange} placeholder="Notes"></textarea>
                    <input type="file" accept="image/*" onChange={onImageChange} />
                    {selectedImage && <img src={selectedImage} alt="Preview" height="50" />}
                    <button type="submit">Save</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default ItemModal;