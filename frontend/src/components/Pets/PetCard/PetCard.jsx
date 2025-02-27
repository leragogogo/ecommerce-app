import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetCard.css';
import unicorn from '../../../assets/pets/unicorn.png'

const PetCard = ({ pet }) => {
  const navigate = useNavigate();

  return (
    <div className="pet-card" onClick={() => navigate(`/pets/${pet.id}`)}>
      <div className="image-container">
        <img src={unicorn} alt={pet.name} className="pet-image" />
      </div>
      <div className="text-container">
        <h3 className="name">{pet.name}</h3>
        <p className="price">{pet.price} Euro</p>
      </div>
    </div>
  );
};

export default PetCard;