import React, { Fragment, useContext } from 'react';
import AppContext from '../AppContext';
import Banner from '../Banner';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, moveAllToCart, addToCart, removeFromCart, cart } = useContext(AppContext);


  const isInCart = (newProductId) => cart.some((newProduct) => newProduct.id === newProductId);
  
  return (
    <Fragment>
        

        <div className="wishlist">
        {wishlist.length > 0 && (
          <div className='wishlist-header'>
            <h2 className='wishlist-title'>Wishlist ({wishlist.length})</h2>
            <button onClick={moveAllToCart} className='wishlist-header-btn'>Move All to Bag</button>
          </div>
        )}

        {wishlist.length === 0 ? (
          <p className='wishlist-subtitle'>Wishlist is empty</p>
        ) : (
          <div className="wishlist-items">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-item">
                <img src={item.imageUrl} alt={item.name} className='wishlist-image'/>
                <div className="wishlist-item-details">
                  <h3 className='item-name'>{item.name}</h3>
                  <p className='item-price'>${item.price}</p>
                  <div className="wishlist-item-actions">
                    <div className='wishlist-buttons'>
                    <button className='wishlist-add-to-cart-btn' onClick={() => {
                    if (isInCart(item.id)) {
                      removeFromCart(item.id);
                    } else {
                      addToCart(item); 
                    }
                  }}
                >
                  {isInCart(item.id) ? 'Remove' : 'Add to Cart'}
                    </button>
                    <button onClick={() => removeFromWishlist(item.id)} className='wishlist-remove-btn'>
                      Remove from Wishlist
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </Fragment>
  );
};


export default Wishlist;