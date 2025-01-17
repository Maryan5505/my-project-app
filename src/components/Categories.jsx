import React, { Fragment } from 'react'

const categories = [
    { id: 1, name: "Phones" },
    { id: 2, name: "Computers" },
    { id: 3, name: "SmartWatch" },
    { id: 3, name: "Camera" },
    { id: 3, name: "HeadPhones" },
    { id: 3, name: "Gaming" }
  ];


const Categories = () => {
  return (
    <Fragment>
        <div className='line'></div>
        <div className="Categories">
            <div className="Categories-title">Categories</div>
            <div className="Categories-filter">Browse By Category</div>
            <div className="category-container">
      {categories.map((category) => (
        <button key={category.id} className="category-button">
          <div className={`category-icon-${category.name}`}></div>
          <div className="category-name">{category.name}</div>
        </button>
      ))}
    </div>
        </div>
        <div className='line'></div>
    </Fragment>
  )
}

export default Categories