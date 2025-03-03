import React from 'react';
import './Cart.css';
import { useCart } from '../../providers/CartProvider';
import CartCard from './CartCard/CartCard';
import { Link } from "react-router-dom";
const Cart = () => {
    const { cartItems } = useCart();
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
                    <button className='checkout'>
                        Checkout
                    </button>
                </div>}

        </div>
    );
};

export default Cart;