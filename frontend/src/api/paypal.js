// api endpoints connected to PayPal

import { localhost } from './config';
export const makePayment = async (data, actions, user, cart, totalPrice) => {
    try {
        await actions.order.capture();
        const orderItems = cart.map((item) => ({
            product: item.pet.id,
            quantity: item.quantity,
        }));

        const response = await fetch(`${localhost}/api/paypal/success`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify({
                orderID: data.orderID,
                orderItems,
                totalPrice,
            }),
        });

        if (response.ok) {
            localStorage.removeItem("cart");
            window.location.href = `/success?orderID=${data.orderID}`;
            return "✅ Payment successful! Order has been placed.";
        } else {
            return "❌ Order creation failed!";
        }
    } catch (error) {
        return "❌ Payment failed, please try again.";
    }
}