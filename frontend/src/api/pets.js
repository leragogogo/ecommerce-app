import { Category } from '../models/Category';
import { Pet } from '../models/Pet';

// Mock data for development
const mockCategories = [
    new Category(1, 'Air'),
    new Category(2, 'Earth'),
    new Category(3, 'Water'),
    new Category(4, 'Fire'),
]
export const mockPets = [
    new Pet(1, 'Unicorn', 'A graceful creature that brings luck to your house', 10000, 2, 3, 'unicorn.png'),
    new Pet(2, 'Romanian Dragon', 'The biggest and the most dangerous spice of dragons', 15000, 4, 2, 'romanian-dragon.png'),
    new Pet(3, 'Niffler', 'A naughty pet with which you will never get bored, and it can help you enrich', 20000, 2, 1, 'niffler.jpg'),
    new Pet(4, 'Water dragon', 'The kindest dragon that you can meet in your life. It loves to cuddle', 200000, 3, 2, 'water-dragon.jpg'),
    new Pet(5, 'Puffly', 'A curious water creature that can conjure you candys.', 18000, 3, 3, 'puffly.jpg'),
    new Pet(6, 'Phoenix', 'A magic bird that reincarnates from the ash, and its tears have regenerative properties.', 30000, 4, 1, 'phoenix.jpg'),
    new Pet(7, 'Pegasus', "With this flying animal you don't need to spend your money on plane tickets.", 24000, 1, 4, 'pegasus.jpg'),
    new Pet(8, 'Fairy', 'A perfect companion for a life. Its magic helps with hardships and makes good moments even better.', 27000, 1, 8, 'fairy.jpg'),

];

export const createPet = async () => {

}

export const fetchCategories = async () => {
    return mockCategories;
}

export const fetchPets = async (searchQuery) => {
    // Replace with actual API call later
    return mockPets.filter(pet =>
        pet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
};

export const fetchPetDetails = async (id) => {
    // Replace with actual API call later
    return mockPets.find(pet => pet.id === Number(id));
};