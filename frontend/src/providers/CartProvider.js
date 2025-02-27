// Create CartContext.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pet, quantity) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === pet.id);
      if (existing) {
        return prev.map(item => 
          item.id === pet.id 
            ? {...item, quantity: item.quantity + quantity}
            : item
        );
      }
      return [...prev, {...pet, quantity}];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);