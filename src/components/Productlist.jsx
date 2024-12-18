import React, { Fragment } from 'react'

const products = [
    { id: 1, name: "Breed Dry Dog Food", price: 100, imageUrl: "", rating: "", isNew: false },
    { id: 2, name: "CANON EOS DSLR Camera", price: 360, imageUrl: "", rating: "", isNew: false },
    { id: 3, name: "ASUS FHD Gaming Laptop", price: 700, imageUrl: "", rating: "", isNew: false },
    { id: 4, name: "Curology Product Set", price: 500, imageUrl: "", rating: "", isNew: false },
    { id: 5, name: "Kids Electric Car", price: 960, imageUrl: "", rating: "", isNew: true },
    { id: 6, name: "Jr. Zoom Soccer Cleats", price: 1160, imageUrl: "", rating: "", isNew: false },
  ];


const Productlist = () => {
  return (
    <Fragment>
        <div className='Product'>
        <div className='Product-title'>
                Our Products
        </div>
        <div className='Product-subtitle'>
            Explore Our Products
        </div>
        <form action="" className='Product-form'>
            <input type="text" className='Product-searchinput' placeholder='What are you looking for?'/>
        </form>
        <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          {product.isNew && <div className="new-tag">NEW</div>}
        </div>
      ))}
    </div>
    {products.length > 6 && (
        <div className='Product-list-button'>
            <button  className="show-more-btn">
                View All Products
            </button>
        </div>
      )}
        </div>
    
    </Fragment>
  );
}

export default Productlist