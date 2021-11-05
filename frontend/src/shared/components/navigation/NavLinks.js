import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';
const NavLinks = props => {
    return (
        <ul className="nav-links">
        <li>
          <NavLink to="/service" exact className="nav-links-items">
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact className="nav-links-items">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact className="nav-links__items">
            About Us
          </NavLink>
        </li>
      </ul>
    );  
}
export default NavLinks;