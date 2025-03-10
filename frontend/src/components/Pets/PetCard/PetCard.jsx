import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetCard.css';

const PetCard = ({ pet }) => {
  const navigate = useNavigate();

  const loadImage = (imagePath) => {
    return require(`../../../assets/pets/${imagePath}`);
  };

  return (
    <div className="pet-card" onClick={() => navigate(`/pets/${pet.id}`, { state: { pet } })}>
      <div className="image-container">
        <img src={loadImage(pet.imagePath)} alt={pet.name} className="pet-image" />
      </div>
      <div className="text-container">
        <h3 className="name">{pet.name}</h3>
        <p className="price">{pet.price} Euro</p>
      </div>
    </div>
  );
};

export default PetCard;