// api endpoints connected to pets
import { localhost } from './config';
export const createPet = async (newPet) => {
    const response = await fetch(`${localhost}/api/pets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "name": newPet.name,
            "description": newPet.description,
            "price": newPet.price,
            "category": newPet.category.name,
            "image": newPet.imagePath,
        }),

    });
    return await response.json();
}

export const fetchPets = async () => {
    const response = await fetch(`${localhost}/api/pets`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    return await response.json();
};