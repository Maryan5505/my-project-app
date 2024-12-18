import React from "react";

const newProducts = [
    { id: 7, name: "New Smart TV", price: 1500, imageUrl: "", isNew: true },
    { id: 8, name: "Wireless Earbuds", price: 200, imageUrl: "", isNew: true },
    { id: 9, name: "Gaming Chair", price: 300, imageUrl: "", isNew: true },
    { id: 10, name: "Smart Fridge", price: 2500, imageUrl: "", isNew: true },
  ];

const NewArrivals = () => {
  return (
    <div className="NewArrivals">
        <div className="NewArrivals-title">Featured</div>
      <h2 className="NewArrivals-subtitle">New Arrival</h2>
      <div className="NewProducts">
        {newProducts.map((newProduct) => (
          <div key={newProduct.id} className="newProduct-card">
            <img src={newProduct.imageUrl} className="newProduct-image"/>
            <div className="newProduct-info">
              <h3 className="newProduct-name">{newProduct.name}</h3>
              <p className="newProduct-price">${newProduct.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="new-tag">NEW</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;