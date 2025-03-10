const express = require("express");
const { getAllPets, createPet, updateStock } = require("../controllers/petController");

const router = express.Router();

router.get("/", getAllPets);
router.post("/", createPet);
router.put("/:id/stock", updateStock);

module.exports = router;