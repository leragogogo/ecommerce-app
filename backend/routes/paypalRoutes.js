const express = require("express");
const { makePayment } = require("../controllers/paypalController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/success", protect, makePayment);

module.exports = router;
