import React, { createContext, useState, useEffect } from 'react';
import RemoveButton from '../assets/Cart/removeButton.png';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isInWishlist = prevWishlist.some((item) => item.id === product.id);
      if (isInWishlist) {
        return prevWishlist.filter((item) => item.id !== product.id); 
      } else {
        return [...prevWishlist, product]; 
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
  };


  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const moveAllToCart = () => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      wishlist.forEach((product) => {
        if (!updatedCart.some((item) => item.id === product.id)) {
          updatedCart.push({ ...product, quantity: 1 }); 
        }
      });
      return updatedCart;
    });
  
    
    setWishlist([]);
  };



  return (
    <AppContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart, removeFromWishlist, moveAllToCart, updateQuantity, RemoveButton }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;