import React, { Fragment, useContext } from 'react';
import AppContext from '../AppContext';
import Banner from '../Banner';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { Link } from 'react-router-dom';




const Cart = () => {
  const { cart, removeFromCart, updateQuantity, RemoveButton } = useContext(AppContext);



  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);


  };
  return (
    <Fragment>
        
        <div className="cart">
      <div className='cart-path'>
        <Link to="/" href="" className='cart-link-to-home'>
            Home 
        </Link>
      </div>

      <div className='cart-title-fot-items'>
            <div>
            Product
            </div>
            <div>
            Price
            </div>
            <div>
            Quantity
            </div>
            <div>
            Subtotal
            </div>
      </div>
      {cart.length === 0 ? (
        <p className='cart-subtitle'>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            
            <div key={item.id} className="cart-item">
              <div className='cart-item-first-column'>
              <img className='cart-item-picture' src={item.imageUrl} />
              <h3 className='cart-item-name'>{item.name}</h3>
              </div>
              <div className="cart-item-details">
                
                <p className='cart-item-price'>${item.price}</p>
                <div className="cart-item-quantity">
                  <button className='cart-add-quantity-btn'
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className='cart-rem-quantity-btn' onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>

                  
                
                </div>
                <div className="cart-item-subtotal">
                  ${item.price * item.quantity} 
                </div>
                <button className='cart-remove-btn' onClick={() => removeFromCart(item.id)}>
                  <img src={RemoveButton} alt="" />
                </button>
            
              </div>
              
            </div>
            
          ))}
        </div>
        
      )}
      <div className='cart-replace-links'>
        <Link to="/" href="" className='cart-link-shop'>
        Return To Shop
        </Link>
        <a href="" className='cart-link-cart'>
        Update Cart
        </a>
      </div>
      <div className='cart-footer'>
        <div className='cart-cupon-box'>
            <form action="">
                <input type="text" placeholder='Coupon Code' className='cart-coupon-input' />
                <button className='cart-coupon-btn'>
                    Apply Coupon
                </button>
            </form>
        </div>
        <div className='cart-total-menu'>
            <div className='cart-menu-total'>
                Cart Total
            </div>
            <div className='total-menu-subtotle'>
                <div>
                    Subtotal
                </div>
                <div>
                    ${calculateSubtotal()}
                </div>
            </div>
            <div className='total-menu-shipping'>
                <div>
                    Shipping
                </div>
                <div>
                    FREE
                </div>
            </div>
            <div className='total-menu-total'>
                <div>
                    Total
                </div>
                <div>
                    ${calculateSubtotal()}
                </div>
            </div>
            <button className='cart-checkout-btn'>
                Procees to checkout
            </button>
        </div>
      </div>
    </div>
    
   
    </Fragment>
  );
};

export default Cart;