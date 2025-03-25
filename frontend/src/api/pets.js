// api endpoints connected to pets

export const createPet = async (newPet) => {
    console.log({
        "name": newPet.name,
        "description": newPet.description,
        "price": newPet.price,
        "category": newPet.category.name,
        "image": newPet.imagePath,
    })
    const response = await fetch(`${process.env.REACT_LOCAL_HOST}/api/pets`, {
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
    const response = await fetch(`${process.env.REACT_LOCAL_HOST}/api/pets`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    return await response.json();
};