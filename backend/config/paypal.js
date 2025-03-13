const paypal = require("paypal-rest-sdk");
require("dotenv").config();
// configuration for PayPal
paypal.configure({
    mode: "sandbox", 
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_SECRET
});

module.exports = paypal;
