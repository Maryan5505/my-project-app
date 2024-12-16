import React from 'react'

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
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sign up</a></li>
                </ul>
            </nav>
            <div className="Navigation-search">
                <form action="">
                    <input className="Navigation-input" type="text" placeholder='What are you looking for?' />
                </form>
                <a className="Navigation-likes" href=""></a>
                <a className="Navigation-bin" href=""></a>
                <a className="Navigation-profile" href=""></a>
            </div>
        </div>
    </div>
  )
}

export default Navigation