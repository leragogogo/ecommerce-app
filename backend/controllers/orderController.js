const Order = require("../models/orderModel");

const getUserOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).populate("orderItems.product");;
    res.json(orders);
}

module.exports = { getUserOrders };