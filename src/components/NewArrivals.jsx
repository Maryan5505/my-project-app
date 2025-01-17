import React from "react";
import { useContext } from 'react';
import AppContext from '../components/AppContext';

const newProducts = [
    { id: 7, name: "Microsoft Surface Pro 9", price: 3200, imageUrl: "https://content.rozetka.com.ua/goods/images/big/491914821.jpg", isNew: true },
    { id: 8, name: "Tronsmart Bang SE Black Speaker", price: 85, imageUrl: "https://content.rozetka.com.ua/goods/images/big_tile/370301858.jpg", isNew: true },
    { id: 9, name: "Razer DeathStalker V2 Pro Keyboard", price: 300, imageUrl: "https://content2.rozetka.com.ua/goods/images/big_tile/395106072.jpg", isNew: true },
    { id: 10, name: "Mercusys MR60X Router Wi-Fi 6", price: 20, imageUrl: "https://content1.rozetka.com.ua/goods/images/big_tile/398282646.jpg", isNew: true },
  ];

const NewArrivals = () => {

  const { cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist } = useContext(AppContext);

  
  const isInCart = (newProductId) => cart.some((newProduct) => newProduct.id === newProductId);
  const isInWishlist = (newProductId) => wishlist.some((newProduct) => newProduct.id === newProductId);


  return (
    <div className="NewArrivals">
        <div className="NewArrivals-title">Featured</div>
      <h2 className="NewArrivals-subtitle">New Arrival</h2>
      <div className="NewProducts">
        {newProducts.map((newProduct) => (
          <div key={newProduct.id} className="newProduct-card">
            <div className="newProduct-image-container">
              <img src={newProduct.imageUrl} className="newProduct-image" />
              <button 
              className={`add-to-wishlist-btn ${isInWishlist(newProduct.id) ? 'active' : ''}`}
              onClick={() => {
                if (isInWishlist(newProduct.id)) {
                  removeFromWishlist(newProduct.id);
                } else {
                  addToWishlist(newProduct); 
                }
              }}>
            </button>
              {newProduct.isNew && <div className="newProduct-tag">NEW</div>}
              </div>
              <div className="newProduct-info">
              <h3 className="newProduct-name">{newProduct.name}</h3>
              <p className="newProduct-price">${newProduct.price}</p>
              <button className="add-to-cart-btn" onClick={() => {
                    if (isInCart(newProduct.id)) {
                      removeFromCart(newProduct.id);
                    } else {
                      addToCart(newProduct); 
                    }
                  }}>{isInCart(newProduct.id) ? 'Remove from Cart' : 'Add to Cart'}</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;