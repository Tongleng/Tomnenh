import React, { useState, useEffect } from "react";
import axios from "axios";

import Input from "../../../shared/components/form/Input";
import Button from "../../../shared/components/button/Button";
import GoogleMap from "../../components/google-map/GoogleMap";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validators";
import { useForm } from "../../../shared/hooks/form-hook";
import "./ContactPage.css";

import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactPage = (props) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    AOS.init({duration: 1500});
  },[])

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/contact")

      .then((res) => {
        console.log(res);

        //  setUsers(JSON.parse(res))
        const responseData = res.data.contacts;
        // const responseData = res.json()
        setContacts(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const onSubmit = () => {
    alert("Your data was submitted");
  };

  return (
    <div className="contact-page">
      <div className="contact-information" data-aos="fade">
        <div id="left">
          <h1>Contact Us</h1>
        </div>
        <div id="right">
          {contacts.map((contact) => (
            <div key={contact._id}>
              {<a href={`mailto:${contact.email}`} >{contact.email}</a>}
              {contact.number.map((n) => (
                <a href={`tel: ${n}`}>{n}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="contact-form" data-aos="fade">
        <form className="loginform-container">
          <h3>LET'S GET IN TOUCH. WE ARE HIRING EMPLOYEES</h3>
          <Input
            element="input"
            id="username"
            type="text"
            placeholder="Username"
            validators={[VALIDATOR_MINLENGTH(1)]}
            errorText="Please enter your name"
            onInput={inputHandler}
          />
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
            element="textarea"
            id="textarea"
            type="textarea"
            placeholder="Example@email.com"
            validators={[VALIDATOR_MINLENGTH(1)]}
            errorText="Please enter what is in your mines"
            onInput={inputHandler}
          />

          <Button
            type="submit"
            disabled={!formState.isValid}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="contact-address" data-aos="fade">
        <h1>Google Map</h1>
        <GoogleMap />
      </div>
    </div>
  );
};
export default ContactPage;
