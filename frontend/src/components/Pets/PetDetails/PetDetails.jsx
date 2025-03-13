import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PetDetails.css';
import { useCart } from '../../../providers/CartProvider';
import AddToCartModal from '../../Cart/AddToCartModal/AddToCartModal';

// component that appears when user clicks on a pet
const PetDetail = () => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const pet = location.state?.pet;
    const loadImage = (imagePath) => {
        return require(`../../../assets/pets/${imagePath}`);
    };

    const handleAddToCart = () => {
        addToCart(pet, quantity);
        setShowModal(true);
    };

    if (!pet) return <div>Loading...</div>;

    return (
        <div className="pet-detail">
            <img src={loadImage(pet.imagePath)} alt={pet.name} className='details-image' />
            <div className='desc-container'>
                <h1 className='pet-name'>{pet.name}</h1>
                <p className='pet-details-text'>{pet.description}</p>
                <p className='pet-price'>{pet.price} Euro</p>
                {(
                    <>
                        <div className="quantity-controls">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                aria-label="Decrease quantity"
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="add-to-cart"
                            onClick={handleAddToCart}
                        >
                            Add to Cart ({quantity})
                        </button>
                        {showModal && (
                            <AddToCartModal onClose={() => setShowModal(false)} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PetDetail;