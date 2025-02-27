
import React, { useState } from 'react';
import { usePets } from '../../../providers/PetsProvider';
import { useNavigate } from 'react-router-dom';

const PetForm = () => {
    const { addPet } = usePets();
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        age: '',
        description: ''
    });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPet(formData);
            navigate('/pets');
        } catch (err) {
            // Handle error
        }
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

                <label>
                    Breed:
                    <input
                        type="text"
                        value={formData.breed}
                        onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                        required
                    />
                </label>

                <label>
                    Age:
                    <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        required
                    />
                </label>

                <label>
                    Description (for image generation):
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