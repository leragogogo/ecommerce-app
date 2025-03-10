import React from 'react';
import './CartCard.css';
import { useCart } from '../../../providers/CartProvider';
import bin from '../../../assets/cart/bin.png'
import { usePets } from '../../../providers/PetsProvider';

const CartCard = ({ cartItem }) => {
    const { decrementQuantity, incrementQuantity, deleteFromCart } = useCart();
    const { updateStock } = usePets();
    const loadImage = (imagePath) => {
        return require(`../../../assets/pets/${imagePath}`);
    };
    return (
        <div className='cart-card'>
            <div className="cart-image-container">
                <img src={loadImage(cartItem.pet.imagePath)} alt={cartItem.pet.name} className="cart-image" />
            </div>
            <div className="item-details">
                <div className="mobile-row">
                    <h3 className="item-name">{cartItem.pet.name}</h3>
                    <div className="controls-group">
                        <div className="quantity-controls">
                            <button
                                onClick={() => {
                                    if (cartItem.quantity > 0) {
                                        updateStock(cartItem.pet.id, 1);
                                    }
                                    decrementQuantity(cartItem.pet.id);
                                }}
                                aria-label="Decrease quantity"
                            >
                                -
                            </button>
                            <span>{cartItem.quantity}</span>
                            <button
                                onClick={() => {
                                    incrementQuantity(cartItem.pet.id);
                                    if (cartItem.pet.stock > 0) {
                                        updateStock(cartItem.pet.id, -1);
                                    }
                                }
                                }
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                        <img className="bin" src={bin} onClick={() => {
                            updateStock(cartItem.pet.id, cartItem.quantity);
                            deleteFromCart(cartItem.pet.id);
                        }
                        } />
                    </div>
                    <h3 className="item-price">{`€${cartItem.pet.price * cartItem.quantity}`}</h3>
                </div>
            </div>
        </div>
    );
};

export default CartCard;