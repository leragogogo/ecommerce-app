import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import { useAuth } from "../../../providers/AuthProvider";

const PayPalButton = ({ totalPrice, cart }) => {
    const { user } = useAuth();

    const handleApprove = async (data, actions) => {
        try {
            const order = await actions.order.capture();
            const orderItems = cart.map((item) => ({
                product: item.pet.id,
                quantity: item.quantity,
            }));

            const response = await fetch("http://localhost:5001/api/paypal/success", {
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
                alert("✅ Payment successful! Order has been placed.");
                window.location.href = `/success?orderID=${data.orderID}`;
            } else {
                alert("❌ Order creation failed!");
            }
        } catch (error) {
            alert("❌ Payment failed, please try again.");
        }
    };

    return (
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
            <PayPalButtons
                style={{ layout: "vertical" }}
                fundingSource={FUNDING.PAYPAL}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ amount: { currency_code: "USD", value: totalPrice } }],
                    });
                }}
                onApprove={handleApprove}
                onCancel={() => {
                    alert("❌ Cancel");
                }}
                onError={(err) => {
                    alert("❌ An error occurred with PayPal. Please try again.");
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;

