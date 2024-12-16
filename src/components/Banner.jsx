import React from 'react'

const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-row">
           <div className='banner-title'>
              <div className="banner-text">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              </div>
              <a className="banner-link" href="">
                  ShopNow
                </a>
           </div>
           <div> 
              <select className="banner-list">
                <option value="en">English</option>
              </select>
           </div>
        </div>
    </div>
  )
}

export default Banner