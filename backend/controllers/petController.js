const Pet = require("../models/petModel");

const getAllPets = async (req, res) => {
    const pets = await Pet.find({});
    res.json(pets);
}

const createPet = async (req, res) => {
    const { name, description, price, category, stock, image } = req.body;
    const pet = new Pet({
        name, description, price, category, stock, image
    })

    const savedPet = await pet.save();
    res.status(201).json(savedPet);
}

const updateStock = async (req, res) => {
    const { quantity } = req.body;
    const { id } = req.params;
    try {
        const pet = await Pet.findById(id);

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }

        if (pet.stock + quantity < 0) {
            return res.status(400).json({ message: "Not enough stock available" });
        }

        pet.stock += quantity;
        await pet.save();

        res.json({ message: "Stock updated successfully", pet });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

module.exports = { getAllPets, createPet, updateStock };