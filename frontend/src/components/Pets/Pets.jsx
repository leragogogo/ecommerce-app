import React, { useEffect, useState } from 'react';
import PetCard from '../../components/Pets/PetCard/PetCard'
import SearchBar from '../../components/Pets/SearchBar/SearchBar'
import './Pets.css';
import { usePets } from '../../providers/PetsProvider';
import { useNavigate } from 'react-router-dom';

const Pets = () => {
    const { pets, loading, error, loadPets } = usePets();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            console.log('useEffect')
            loadPets(searchQuery);
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [searchQuery]);

    if (error) return <div>Error: {error}</div>;
    if (loading) return <div>Loading...</div>;

    return (
        <div className="pet-list-page">
            <div className="controls-container">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <button
                    className="add-pet-button"
                    onClick={() => navigate('/pets/petForm')}
                >
                    Add New Pet
                </button>
            </div>
            <div className="pet-grid">
                {pets.map(pet => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    );
};

export default Pets;