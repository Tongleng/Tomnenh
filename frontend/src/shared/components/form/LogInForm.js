import React, {useState, useContext} from "react";
import Button from "../button/Button";
import Input from "./Input";
import { AuthContext } from '../../context/AuthContext'



import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validators";

import { useForm } from "../../hooks/form-hook";

import "./LogInForm.css";

const LogInForm = (props) => {

  const auth = useContext(AuthContext);

  const [isLoginMode] = useState(true);
  const [setIsLoading] = useState(false);
  const [setError] = useState();

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

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    
    // setIsLoading(true);

    if (isLoginMode) {
      try {
        const response = await fetch('http://localhost:3001/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          })
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        auth.login();
      } catch (err) {
        setIsLoading(false);
        setError(err.message || 'Something went wrong, please try again.');
      }
    } 
  };
  return (
    <form onSubmit={authSubmitHandler} className="loginform-container">
      <h2>Admin Login</h2>
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
        id="password"
        type="password"
        placeholder="Password"
        validators={[VALIDATOR_MINLENGTH(8)]}
        errorText="Please enter a valid password, at least 8 characters"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        LOGIN
      </Button>
    </form>
  );
};
export default LogInForm;
