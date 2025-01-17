import React from 'react'
import FacebookIcon from '../assets/Footer/Facebook.png';
import TwitterIcon from '../assets/Footer/Twitter.png';
import InstagramIcon from '../assets/Footer/Instagram.png';
import InIcon from '../assets/Footer/In.png';
import AppStoreLink from '../assets/Footer/appstore.png';
import PlayMarketLink from '../assets/Footer/playmarket.jpg';
import QrCode from '../assets/Footer/Qr.jpg';


const Footer = () => {
    const scrollToTop = () => {
        document.documentElement.scrollTop = 0; 
      };


  return (
    <div className="Footer">
        <button className="Footer-button" onClick={scrollToTop}></button>
        <div className="footer-row">
            <div className='footer-column'>
                <div className='footer-column-title'>
                        Exclusive
                </div>
                <div className='Footer-subscribe'>
                    <a className='Footer-subscribe-link' href="">Subscribe</a>
                </div>
                <div className='Footer-describe'>
                        <a href="">
                        Get 10% off your first order
                        </a>
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
                        <img src={QrCode} alt="" />
                    </div>
                    <div className='Footer-download'>
                        <div className='Footer-playmarket'>
                            <a href="" className='Footer-playmarket-link'>
                                <img src={PlayMarketLink} alt="" />
                            </a>
                        </div>
                        <div className='Footer-appstore'>
                            <a href="" className='Footer-appstore-link'>
                                <img src={AppStoreLink} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='Footer-social'>
                    <div >
                        <a  href="" className='Footer-social-facebook'>
                            <img src={FacebookIcon} alt="" />
                        </a>
                    </div>
                    <div >
                    <a href="" className='Footer-social-twitter'>
                        <img src={TwitterIcon} alt="" />
                    </a>
                    </div>
                    <div >
                    <a href="" className='Footer-social-instagram'>
                        <img src={InstagramIcon} alt="" />
                    </a>
                    </div>
                    <div >
                    <a href="" className='Footer-social-in'>
                        <img src={InIcon} alt="" />
                    </a>
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