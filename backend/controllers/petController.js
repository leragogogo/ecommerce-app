const Pet = require("../models/petModel");

const getAllPets = async (req, res) => {
    const pets = await Pet.find({});
    res.json(pets);
}

const createPet = async (req, res) => {
    const { name, description, price, category, image } = req.body;
    const pet = new Pet({
        name, description, price, category, image
    })

    const savedPet = await pet.save();
    res.status(201).json(savedPet);
}

module.exports = { getAllPets, createPet};