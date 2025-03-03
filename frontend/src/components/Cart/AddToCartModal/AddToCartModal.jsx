import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddToCartModal.css';

const AddToCartModal = ({ onClose }) => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        onClose();
        navigate('/pets');
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h3>Item added to cart!</h3>
                <div className="modal-buttons">
                    <button
                        className="view-cart-btn"
                        onClick={() => navigate('/cart')}
                    >
                        View Basket
                    </button>
                    <button
                        className="continue-shopping-btn"
                        onClick={handleContinueShopping}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddToCartModal;