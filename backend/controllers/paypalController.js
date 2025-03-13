const Order = require("../models/orderModel");
const axios = require("axios");

const makePayment = async (req, res) => {
    try {
        const { orderID, orderItems, totalPrice } = req.body;

        if (!orderID || !orderItems || !totalPrice) {
            return res.status(400).json({ message: "Missing required payment details" });
        }

        // PayPal authentication 
        const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`).toString("base64");
        const tokenResponse = await axios.post(
            "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            "grant_type=client_credentials",
            {
                headers: {
                    Authorization: `Basic ${auth}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        const accessToken = tokenResponse.data.access_token;

        // capture order
        await axios.post(
            `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }
        );

        // save order to database
        const newOrder = new Order({
            user: req.user.id,
            orderItems,
            totalPrice,
        });

        await newOrder.save();

        res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: "Error processing payment", error: error.response?.data || error.message });
    }
}

module.exports = { makePayment };