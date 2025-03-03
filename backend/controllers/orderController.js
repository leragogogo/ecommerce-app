const Order = require("../models/orderModel");

const getUserOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).populate("orderItems.product");;
    res.json(orders);
}

const createOrder = async (req, res) => {
    const { orderItems, totalPrice } = req.body;
    const order = new Order({
        user: req.user._id,
        orderItems,
        totalPrice,
        isPaid: false,
    })

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
}

module.exports = { getUserOrders, createOrder };