import React, {useState, useCallback, useContext} from "react";
import {
  // BrowserRouter as Router,
  Route,
  // Switch,
  // Redirect,
} from "react-router-dom";
import Dashboards from "../dashboards/Dashboards";
import { AuthContext } from "../../../shared/context/AuthContext";

import { useForm } from "../../../shared/hooks/form-hook";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validators";

import Input from "../../../shared/components/form/Input";
import Button from "../../../shared/components/button/Button";
// import LogInForm from '../../../shared/components/form/LogInForm';

import "./Authenticate.css";

const Authenticate = (props) => {

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  
  const auth = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };
  
  if(isLoggedIn){
    <Route path="/asd/admin" exact>
      <Dashboards />
    </Route>
  }

  return (

    <AuthContext.Provider 
      value={{ isLoggedIn: isLoggedIn, login:login, logout:logout }}>
    <div className="authenticate-page">
      {/* <LogInForm /> */}
      <form >
        <h3>Admin Login</h3>
        <Input
          element="input"
          id="email"
          type="email"
          placeholder="Example@email.com"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="pasword"
          type="password"
          placeholder="Password"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter a valid password, at least 8 characters"
          onInput={inputHandler}
        />

        <Button type="submit" disabled={ formState.isValid} onClick={authSubmitHandler}>
          Login
        </Button>
      </form>
    </div>
    </AuthContext.Provider>
  );
};
export default Authenticate;
