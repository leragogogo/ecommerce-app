
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PetForm.css';
import { usePets } from '../../../providers/PetsProvider';

// form to create new pet
const PetForm = () => {
    const { categories } = usePets();
    const { addPet } = usePets();
    const [formData, setFormData] = useState({
        name: '',
        category: null,
        price: 1000,
        description: ''
    });


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPet(formData);
            navigate('/pets');
        } catch (err) {
            alert(err);
        }
    };

    const handlePriceChange = (e) => {
        setFormData({ ...formData, price: e.target.value })
    };

    const incrementPrice = () => {
        setFormData(prev => ({
            ...prev,
            price: Number(prev.price) + 100
        }));
    };

    const decrementPrice = () => {
        setFormData(prev => ({
            ...prev,
            price: Math.max(100, prev.price - 100)
        }));
    };

    return (
        <div className="pet-form">
            <h2>Add New Pet</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required

                    />
                </label>

                <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="form-select"
                >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <label>
                    Price:
                    <div className="input-price">
                        <button type="button" onClick={decrementPrice}>-100</button>
                        <input
                            type="number"
                            value={formData.price}
                            onChange={handlePriceChange}
                            step="100"
                            min="100"
                            className="hundred-step-input"
                        />
                        <button type="button" onClick={incrementPrice}>+100</button>
                    </div>
                </label>

                <label>
                    Description :
                    <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </label>

                <button type="submit">Add Pet</button>
            </form>
        </div>
    );
};

export default PetForm;