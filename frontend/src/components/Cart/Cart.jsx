import React, {useState} from 'react';
import './Cart.css';
import { useCart } from '../../providers/CartProvider';
import { useAuth } from '../../providers/AuthProvider';
import CartCard from './CartCard/CartCard';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CheckoutModal from '../Checkout/CheckoutModal/CheckoutModal';

// component with pets added to cart/backet
const Cart = () => {
    const { user } = useAuth()
    const { cartItems } = useCart();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const calculateTotal = () => {
        var total = 0;
        for (var item of cartItems) {
            total += item.pet.price * item.quantity;
        }
        return total;
    }
    return (
        <div className="cart-page">
            {cartItems.length == 0 ?
                <div className='empty-screen'>
                    <h3 className='empty-text'>
                        Your basket is empty
                    </h3>
                    <Link to="/pets" className='continue-shopping'>
                        Continue shopping
                    </Link>
                </div> :
                <div className="cart-grid">
                    <h2>Shopping Basket</h2>
                    {cartItems.map(cartItem => (
                        <CartCard cartItem={cartItem} />
                    ))}
                    <h3 className='total'>
                        {`Total: €${calculateTotal()}`}
                    </h3>
                    <button className='checkout' onClick={
                        () => {
                            if (user) {
                                navigate("/checkout", {
                                    state: {
                                        totalPrice: calculateTotal()
                                    }
                                });
                            }
                            else {
                                setShowModal(true);
                            }

                        }}>
                        Checkout
                    </button>
                </div>}
            {showModal && (
                <CheckoutModal onClose={() => setShowModal(false)} />
            )}
        </div >
    );
};

export default Cart;