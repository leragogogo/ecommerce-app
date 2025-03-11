import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutModal.css';

const CheckoutModal = ({ onClose }) => {
    const navigate = useNavigate();

    return (
        <div className="checkout-modal">
            <div className="checkout-content">
                <h3>You need to be signed up to proceed with the checkout!</h3>
                <div className="checkout-buttons">
                    <button
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;