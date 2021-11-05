import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import BackToTop from "react-back-to-top-button";


import './App.css';

import MainNavigation from './shared/components/navigation/MainNavigation';
import HomePage from './views/pages/homepage/HomePage';
import ServicePage from './views/pages/servicepage/ServicePage';
import ContactPage from './views/pages/contactpage/ContactPage';
import AboutPage from './views/pages/aboutpage/AboutPage';
import Scroller from './views/components/scroller/Scroller';
import MainFooter from './shared/components/footer/MainFooter';
import CopyRight from './shared/components/footer/CopyRight';

import Authenthicate from './views/pages/authenticate/Authenticate'



const App = (props) => {
  return (
    <Router >
      <MainNavigation />
      
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        
        <Route path="/service">
          <ServicePage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>
        
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/asd/admin">
          <Authenthicate />
        </Route>
        <Redirect path="/"></Redirect>
      </Switch>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={2000}
        easing="easeInOutSine"
      >
        <Scroller />
      </BackToTop>
      <MainFooter />
      <CopyRight />
    </Router>
  );
}

export default App;
