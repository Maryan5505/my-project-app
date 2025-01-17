import React, { Fragment, useContext, useRef, useEffect } from 'react';
import { useState } from 'react';
import AppContext from '../AppContext';
import Banner from "../Banner";
import Navigation from "../Navigation";
import Categories from "../Categories";
import NewArrivals from '../NewArrivals';
import Footer from "../Footer";






const Home = () => {
  const { products, cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist } = useContext(AppContext);



  const [searchQuery, setSearchQuery] = useState(() => {
    const savedSearchQuery = localStorage.getItem('searchQuery');
    return savedSearchQuery ? savedSearchQuery : '';
  });
  
  
  const inputRef = useRef();

  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  
  const isInCart = (productId) => cart.some((product) => product.id === productId);
  const isInWishlist = (productId) => wishlist.some((product) => product.id === productId);

  return (
    <Fragment>
      
      <Categories />
      <div className='Product'>
        <div className='Product-title'>Our Products</div>
        <div className='Product-subtitle'>Explore Our Products</div>
        <form action="" className='Product-form'>
          <input type="text" className='Product-searchinput' placeholder='What are you looking for?' ref={inputRef} onChange={(e) => setSearchQuery(e.target.value)}/>
        </form>
        <div className="product-list">
          {filteredProducts.map((product) => (
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