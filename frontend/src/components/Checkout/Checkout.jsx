import { useCart } from "../../providers/CartProvider";
import PayPalButton from "./PayPalButton/PaypalButton";
import { useLocation } from 'react-router-dom';
import './Checkout.css';

// component with final information about the order and PayPal button to simulate a purchase
const Checkout = () => {
    const totalPrice = useLocation().state?.totalPrice;
    const { cartItems } = useCart();
    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <h3>{`Total price: ${totalPrice}`}</h3>
            <PayPalButton totalPrice={totalPrice} cart={cartItems} />
        </div>
    );
};

export default Checkout;