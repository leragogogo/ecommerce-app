import React, { useEffect, useState } from 'react';
import PetCard from '../../components/Pets/PetCard/PetCard'
import SearchBar from '../../components/Pets/SearchBar/SearchBar'
import './Pets.css';
import { usePets } from '../../providers/PetsProvider';
import { useNavigate } from 'react-router-dom';

// component with all available pets
const Pets = () => {
    const { loading, error, loadPets, filteredPets, filterPets } = usePets();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        filterPets(searchQuery);
    }, [searchQuery]);

    if (error) return <div className="pet-list-page">Error: {error}</div>;
    if (loading) return <div className="pet-list-page">Loading...</div >;
    for (var p of filteredPets) {
        console.log(p.imagePath)
    }
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
                {filteredPets.map(pet => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    );
};

export default Pets;