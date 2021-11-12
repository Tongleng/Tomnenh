import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaLine, FaTelegram } from "react-icons/fa";

import LogoImg from '../../../assets/logo/logo.png';


import './MainFooter.css';

const MainFooter = props => {
    return (
        <footer className="main-footer">
            <div className="main-footer__left-side">
                <a href="/" className="logo-title">
                    <img id="logo-size" className="logo-image-size" src={LogoImg} alt="logo" />
                    <h3>Tomnenh</h3>
                </a>
                <p>Our agency who will be assistant which assist you to ordering goods and products from oversea</p>
                <div className="footer-icon">
                    <a href="https://www.facebook.com">
                        <FaFacebook />
                    </a>
                    <a href="https://www.line.com">
                        <FaLine />
                    </a>
                    <a href="https://www.telegram.com">
                        <FaTelegram />
                    </a>
                </div>
            </div>
            <div className="main-footer__center">
                <h3>Site Map</h3>
                <NavLink to="/service">Our Service</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/about">About Us</NavLink>
            </div>
            <div className="main-footer__right-side">
                <h3>Working Hour</h3>
                <p>Monday-Sunday : 08:00-17:00</p>
            </div>
        </footer>       
    );
}
export default MainFooter;

