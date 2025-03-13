import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import { useAuth } from "../../../providers/AuthProvider";
import { makePayment } from "../../../api/paypal";

const PayPalButton = ({ totalPrice, cart }) => {
    const { user } = useAuth();

    const handleApprove = async (data, actions) => {
        const message = await makePayment(data, actions, user, cart, totalPrice);
        alert(message);
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

