import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PetDetails.css';
import unicorn from '../../../assets/pets/unicorn.png'
import { useCart } from '../../../providers/CartProvider';
import {usePets} from '../../../providers/PetsProvider';

const PetDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [pet, setPet] = useState(null);
    //const navigate = useNavigate();
    const { getPetById } = usePets();

    useEffect(() => {
        const loadPet = async () => {
            try {
                const data = await getPetById(id);
                setPet(data);
            } catch (err) {
                console.error(err);
            }
        };
        loadPet();
    }, [id, getPetById]);

    const handleAddToCart = () => {
        addToCart({ ...pet, quantity });
        //navigate('/cart'); // Or show confirmation
    };

    if (!pet) return <div>Loading...</div>;

    return (
        <div className="pet-detail">
            <img src={unicorn} alt={pet.name} className='details-image' />
            <div className='desc-container'>
                <h1 className='pet-name'>{pet.name}</h1>
                <p className='pet-details-text'>{pet.description}</p>
                <p className='pet-price'>{pet.price} Euro</p>
                <p className={pet.stock === 0 ? 'out-of-stock' : 'in-stock'}>{pet.stock == 0 ? 'Not in stock!' : 'In stock!'}</p>
                {pet.stock > 0 && (
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
                                onClick={() => setQuantity(Math.min(pet.stock, quantity + 1))}
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
                    </>
                )}
            </div>
            {/* Add more details */}
        </div>
    );
};

export default PetDetail;