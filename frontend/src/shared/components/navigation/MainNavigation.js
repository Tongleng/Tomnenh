/* 
    Animation in React
    npm install --save react-transition-group
*/

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";
import LogoImage from '../../../assets/logo/logo.png'

import MainHeader from "./MainHeader";

import NavLinks from "./NavLinks";
import DropDown from "./DropDown";

import Backdrop from "../uielements/Backdrop";

const MainNavigation = (props) => {
  
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <DropDown show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__dropdown-nav">
          <NavLink to="/" exact className="main-navigation__dradropdown-nav-title">
          </NavLink>
          <NavLinks />
        </nav>
      </DropDown>

      <MainHeader>
        <NavLink to="/" exact className="main-navigation__dropdown-nav-title">
          <img id="header-logo" src={LogoImage} alt="header-logo" />
          <h1>Tomneh</h1>
        </NavLink>
        <button className="main-header__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
