import { createContext, useContext, useState, useEffect } from 'react';
import { fetchPets, fetchPetDetails, createPet as apiCreatePet, mockPets } from '../api/pets';
import { Pet } from '../models/Pet';
import { Category } from '../models/Category';
const PetContext = createContext();

export const PetProvider = ({ children }) => {
    const [categories] = useState(
        [
            new Category(1, 'Air'), new Category(2, 'Water'),
            new Category(3, 'Fire'), new Category(4, 'Earth'),
        ]
    );
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
            var categoryIndex = 0;
            var image = 'air.jpg'
            switch (newPet.category) {
                case 'Water':
                    categoryIndex = 1;
                    image = 'water.jpg'
                    break;
                case 'Fire':
                    categoryIndex = 2;
                    image = 'fire.jpg'
                    break;
                case 'Earth':
                    categoryIndex = 3;
                    image = 'earth.jpg'
                    break;
                default:
                    break;
            }
            var pet = new Pet(
                pets[pets.length - 1].id + 1,
                newPet.name, newPet.description,
                newPet.price, categories[categoryIndex], newPet.stock, image);
            await apiCreatePet(newPet);
            var arr = pets;
            arr.push(pet);
            mockPets.push(pet);
            setPets(arr);
        } catch (err) {
            throw err;
        }
    };

    const decreaseStock = (petId, quantity) => {
        var newPets = [];
        for (var i = 0; i < pets.length; i++) {
            newPets.push(pets[i]);
        }
        for (var i = 0; i < newPets.length; i++) {
            if (newPets[i].id == petId) {
                newPets[i].stock -= quantity;
            }
        }
        setPets(newPets);
    }

    const increaseStock = (petId, quantity) => {
        var newPets = [];
        for (var i = 0; i < pets.length; i++) {
            newPets.push(pets[i]);
        }
        for (var i = 0; i < newPets.length; i++) {
            if (newPets[i].id == petId) {
                newPets[i].stock += quantity;
            }
        }
        setPets(newPets);
    }

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
                categories,
                loadPets,
                addPet,
                getPetById,
                decreaseStock,
                increaseStock,
            }}
        >
            {children}
        </PetContext.Provider>
    );
};

export const usePets = () => useContext(PetContext);