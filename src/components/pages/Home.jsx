import React, { Fragment, useContext } from 'react';
import { useState } from 'react';
import AppContext from '../AppContext';
import Banner from "../Banner";
import Navigation from "../Navigation";
import Categories from "../Categories";
import NewArrivals from '../NewArrivals';
import Footer from "../Footer";



const products = [
    { id: 1, name: "Asus Portable Gaming Console 1TB", price: 1100, imageUrl: "https://content.rozetka.com.ua/goods/images/big/479743681.webp", rating: "", isNew: false },
    { id: 2, name: "PlayStation 5 Slim", price: 1200, imageUrl: "https://content2.rozetka.com.ua/goods/images/big/489689447.png", rating: "", isNew: false },
    { id: 3, name: "Acer Aspire 7 Laptop", price: 1000, imageUrl: "https://content.rozetka.com.ua/goods/images/big_tile/372795220.png", rating: "", isNew: false },
    { id: 4, name: "Apple AirPods Pro (2nd Generation)", price: 250, imageUrl: "https://content.rozetka.com.ua/goods/images/big_tile/365137070.jpg", rating: "", isNew: false },
    { id: 5, name: "Black Shark GS3 Smartwatch", price: 70, imageUrl: "https://content2.rozetka.com.ua/goods/images/big/469923001.jpg", rating: "", isNew: false },
    { id: 6, name: "Monopod Tripod with Remote", price: 50, imageUrl: "https://content1.rozetka.com.ua/goods/images/big/321327332.jpg", rating: "", isNew: false },
  ];


const Home = () => {
  const { cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist } = useContext(AppContext);

  
  const isInCart = (productId) => cart.some((product) => product.id === productId);
  const isInWishlist = (productId) => wishlist.some((product) => product.id === productId);

  return (
    <Fragment>
      
      <Categories />
      <div className='Product'>
        <div className='Product-title'>Our Products</div>
        <div className='Product-subtitle'>Explore Our Products</div>
        <form action="" className='Product-form'>
          <input type="text" className='Product-searchinput' placeholder='What are you looking for?' />
        </form>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} className="product-image" alt={product.name} />
              <button
                className={`add-to-wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                onClick={() => {
                  if (isInWishlist(product.id)) {
                    removeFromWishlist(product.id);
                  } else {
                    addToWishlist(product); 
                  }
                }}
              ></button>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => {
                    if (isInCart(product.id)) {
                      removeFromCart(product.id);
                    } else {
                      addToCart(product); 
                    }
                  }}
                >
                  {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
              {product.isNew && <div className="new-tag">NEW</div>}
            </div>
          ))}
        </div>
      </div>
      <NewArrivals />
      
    </Fragment>
  );
};

export default Home