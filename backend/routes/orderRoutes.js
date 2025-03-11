const express = require("express");
const { getUserOrders } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getUserOrders);

module.exports = router;