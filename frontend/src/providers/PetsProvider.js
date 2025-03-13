import { createContext, useContext, useState, useEffect } from 'react';
import { fetchPets, createPet as apiCreatePet } from '../api/pets';
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

    // pets based on search query
    const [filteredPets, setFilteredPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadPets = async (searchQuery = '') => {
        try {
            setLoading(true);
            const data = await fetchPets(searchQuery);

            setPets(
                data.map(
                    (pet) => new Pet(
                        pet._id, pet.name, pet.description,
                        pet.price, pet.category, pet.image
                    )
                )
            );
            setFilteredPets(
                data.map(
                    (pet) => new Pet(
                        pet._id, pet.name, pet.description,
                        pet.price, pet.category, pet.image
                    )
                )
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const filterPets = (searchQuery) => {
        setFilteredPets(pets.filter(pet =>
            pet.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        );
    }

    const addPet = async (newPet) => {
        try {
            let categoryIndex = 0;
            let image = 'air.jpg';

            // select picture based on chosen category
            switch (newPet.category) {
                case 'Water':
                    categoryIndex = 1;
                    image = 'water.jpg';
                    break;
                case 'Fire':
                    categoryIndex = 2;
                    image = 'fire.jpg';
                    break;
                case 'Earth':
                    categoryIndex = 3;
                    image = 'earth.jpg';
                    break;
                default:
                    break;
            }
            newPet.category = categories[categoryIndex];
            newPet.imagePath = image;
            let response = await apiCreatePet(newPet);
            const petId = response?._id;
            let pet = new Pet(
                petId,
                newPet.name,
                newPet.description,
                newPet.price,
                categories[categoryIndex],
                image
            );
            setPets(prevPets => [...prevPets, pet]);

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
                filteredPets,
                loadPets,
                addPet,
                filterPets,
            }}
        >
            {children}
        </PetContext.Provider>
    );
};

export const usePets = () => useContext(PetContext);