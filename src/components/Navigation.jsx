import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="Navigation">
        <div className='Navigation-row'>
            <div className="Navigation-title">
                <a href="">
                    Exclusive
                </a>
            </div>
            <nav>
                <ul class="Navigation-menu">
                    <li><Link to="/"href="">Home</Link></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sign up</a></li>
                </ul>
            </nav>
            <div className="Navigation-search">
                <form action="">
                    <input className="Navigation-input" type="text" placeholder='What are you looking for?' />
                </form>
                <Link to="/wishlist"className="Navigation-likes" href=""></Link>
                <Link to="/cart" className="Navigation-bin" href=""></Link>
                <a to="/cart"className="Navigation-profile" href=""></a>
            </div>
        </div>
    </div>
  )
}

export default Navigation