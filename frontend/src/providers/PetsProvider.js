// src/context/PetContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchPets, fetchPetDetails, createPet as apiCreatePet } from '../api/pets';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadPets = async (searchQuery = '') => {
        try {
            setLoading(true);
            const data = await fetchPets(searchQuery);
            setPets(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addPet = async (newPet) => {
        try {
            /*const createdPet = */await apiCreatePet(newPet);
            setPets(prev => [...prev, newPet]);
            //return createdPet;
        } catch (err) {
            throw err;
        }
    };

    const getPetById = async (id) => {
        try {
            return await fetchPetDetails(id);
        } catch (err) {
            throw err;
        }
    };

    useEffect(() => {
        loadPets();
    }, []);

    return (
        <PetContext.Provider
            value={{
                pets,
                loading,
                error,
                loadPets,
                addPet,
                getPetById,
                updatePet: async (id, updates) => {
                    /* Implement update logic */
                },
                deletePet: async (id) => {
                    /* Implement delete logic */
                }
            }}
        >
            {children}
        </PetContext.Provider>
    );
};

export const usePets = () => useContext(PetContext);