const express = require("express");
const { getAllPets, createPet } = require("../controllers/petController");

const router = express.Router();

router.get("/", getAllPets);
router.post("/", createPet);

module.exports = router;