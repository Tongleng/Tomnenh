import React, { useState} from 'react';
import { NavLink } from 'react-router-dom'

import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';

// import LogoImg from '../../../assets/logo/logo.png';
import '../../../assets/css/logo.css';

const MainNavigation = props => {
    
    const [showNavBarDisplay, setNavBarDisplay] = useState(true);

    return (
        <div className="main-navigation">
            <MainHeader>
                <NavLink to='/' exact>
                    <div className="main-navigation__lef-side">
                        {/* <img className="logo-image-size" src={LogoImg} alt="logo" /> */}
                    </div>
                </NavLink>
                <button className="main-navigation__menu-btn" onClick={()=> setNavBarDisplay(!showNavBarDisplay)}>  
                    <span />
                    <span />
                    <span />
                </button>
                <nav className={showNavBarDisplay ? "close_nav-links":""}>
                    <NavLinks />
                </nav>
            </MainHeader>
        </div>
    );
}
export default MainNavigation;