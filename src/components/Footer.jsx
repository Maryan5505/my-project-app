import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
        <button className="Footer-button"></button>
        <div className="footer-row">
            <div className='footer-column'>
                <div className='footer-column-title'>
                        Exclusive
                </div>
                <div className='Footer-subscribe'>
                    <a className='Footer-subscribe-link' href="">Subscribe</a>
                </div>
                <div className='Footer-describe'>
                        Get 10% off your first order
                </div>
                <form action="">
                    <input type="email" placeholder='Enter your email' className='Footer-input' />
                </form>
            </div>
            <div className='footer-column'>
                <div className='footer-column-title'>
                        Suport
                </div>
                <div className="Footer-street">
                111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
                </div>
                <div className='Footer-email'>
                    <a href="">
                        exclusive@gmail.com
                    </a>
                </div>
                <div>
                +88015-88888-9999
                </div>
            </div>
            <div className='footer-column'>
                <div className='footer-column-title'>
                Account
                </div>
                <div className='Footer-describe'>
                    <a href="">
                        My Account
                    </a>
                </div>
                <div className='Footer-describe'>
                    <a href="">
                    Login / Register
                    </a>
                </div>
                <div className='Footer-describe'>
                    <a href="">
                    Cart
                    </a>
                </div>
                <div className='Footer-describe'>
                    <a href="">
                    Wishlist
                    </a>
                </div>
                <div className='Footer-describe'>
                    <a href="">
                        Shop
                    </a>
                </div>
            </div>
            <div className='footer-column'>
                <div className='footer-column-title'>
                Quick Link
                </div>
                <div className='Footer-describe'>
                    <a href="">Privacy Policy</a>
                </div>
                <div className='Footer-describe'>
                    <a href="">
                    Terms Of Use
                    </a>
                </div>
                <div className='Footer-describe'>
                    <a href="">
                    FAQ
                    </a>
                </div>
                <div className='Footer-describe'>
                    <a href="">
                    Contact
                    </a>
                </div>
            </div>
            <div className='footer-column'>
                <div className='footer-column-title'>
                Download App
                </div>
                <div>
                Save $3 with App New User Only
                </div>
                <div className='Footer-media'>
                    <div className='Footer-qr'>

                    </div>
                    <div className='Footer-download'>
                        <div className='Footer-playmarket'>
                            <a href="" className='Footer-playmarket-link'></a>
                        </div>
                        <div className='Footer-appstore'>
                            <a href="" className='Footer-appstore-link'></a>
                        </div>
                    </div>
                </div>
                <div className='Footer-social'>
                    <div className='Footer-social-facebook'>
                        <a  href=""></a>
                    </div>
                    <div className='Footer-social-twitter'>
                    <a href=""></a>
                    </div>
                    <div className='Footer-social-instagram'>
                    <a href=""></a>
                    </div>
                    <div className='Footer-social-in'>
                    <a href=""></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='Footer-copyright'>
        Copyright Rimel 2022. All right reserved
        </div>
    </div>
  )
}

export default Footer