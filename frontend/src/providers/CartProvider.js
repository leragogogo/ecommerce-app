import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // load cart data from localStorage on initial load
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCartItems(cartData);
  };

  const addToCart = (pet, quantity) => {
    let newCartItems = [...cartItems];

    let existingItem = newCartItems.find((item) => item.pet.id === pet.id);

    if (existingItem) {
      // update quantity in a new array
      newCartItems = newCartItems.map(item =>
        item.pet.id === pet.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // add new item
      newCartItems.push({
        pet: {
          id: pet.id,
          name: pet.name,
          description: pet.description,
          price: pet.price,
          category: pet.category,
          imagePath: pet.imagePath,
        },
        quantity: quantity,
      });
    }

    saveCartToLocalStorage(newCartItems);
  };


  const deleteFromCart = (cartId) => {
    const newCartItems = cartItems.filter((item) => item.pet.id !== cartId);
    saveCartToLocalStorage(newCartItems);
  }

  const decrementQuantity = (cartId) => {
    let newCartItems = cartItems.map(item =>
      item.pet.id === cartId
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    );
    // remove item if quanity equals to 0
    newCartItems = newCartItems.filter(item => item.quantity > 0);
    saveCartToLocalStorage(newCartItems);
  };

  const incrementQuantity = (cartId) => {
    const newCartItems = cartItems.map(item =>
      item.pet.id === cartId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    saveCartToLocalStorage(newCartItems);
  };

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