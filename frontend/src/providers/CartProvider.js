import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pet, quantity) => {
    var existing = cartItems.find((item) => item.pet.id == pet.id);
    if (existing) {
      var newCartItems = cartItems;
      for (var i = 0; i < cartItems.length; i++) {
        if (newCartItems[i].pet.id == pet.id) {
          newCartItems[i].quantity += quantity;
        }
      }
      setCartItems(newCartItems);
    }
    else {
      var arr = cartItems;
      arr.push({ pet: pet, quantity: quantity })
      setCartItems(arr);
    }
  };

  const deleteFromCart = (cartId) => {
    setCartItems(cartItems.filter((item) => item.pet.id != cartId));
  }

  const decrementQuantity = (cartId) => {
    var newCartItems = [];
    for (var item of cartItems) {
      newCartItems.push(item);
    }
    var ind = 0;
    for (var i = 0; i < newCartItems.length; i++) {
      if (newCartItems[i].pet.id == cartId) {
        ind = i;
        newCartItems[i].quantity = Math.max(0, newCartItems[i].quantity - 1);
      }
    }
    if (newCartItems[ind].quantity == 0) {
      setCartItems(newCartItems.filter((item) => item.pet.id != cartId));
    }
    else {
      setCartItems(newCartItems);
    }
  }

  const incrementQuantity = (cartId) => {
    var item = cartItems.find((item) => item.pet.id == cartId);
    var newCartItems = [];
    for (var item of cartItems) {
      newCartItems.push(item);
    }
    for (var i = 0; i < newCartItems.length; i++) {
      if (newCartItems[i].pet.id == cartId) {
        newCartItems[i].quantity = newCartItems[i].quantity + 1;
      }
    }
    setCartItems(newCartItems);

  }

  return (
    <CartContext.Provider value={
      {
        cartItems, addToCart,
        deleteFromCart, decrementQuantity,
        incrementQuantity
      }
    }>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);