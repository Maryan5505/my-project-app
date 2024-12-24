import React from 'react'

const Banner = (props) => {
  return (
    <div className="banner">
        <div className="banner-row">
           <div className='banner-title'>
              <div className="banner-text">
                {props.title}
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