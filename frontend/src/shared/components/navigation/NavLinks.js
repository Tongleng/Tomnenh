import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/service" exact>Our Service</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
        </ul>
    );
}

export default NavLinks;