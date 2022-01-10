import React, { useState, useEffect } from "react";
import axios from "axios";

import Input from "../../../shared/components/form/Input";
import Button from "../../../shared/components/button/Button";
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
              {<a href="mailto:tcambodia.info@gmail.com">{contact.email}</a>}
              {contact.number.map((n) => (
                <a href="tel:+66644905127">{n}</a>
              ))}
            </div>
          ))}
          {/* <a href="https://google.com">tcambodia.info@gmail.com</a>
          <a href="https://google.com">tcambodia@facebook.com</a>
          <a href="https://google.com">+855 123 456</a> */}
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15487.064621674766!2d100.58588954999999!3d13.9725201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e281472721aa0b%3A0x460dde3bd2593849!2z4Lir4Lit4LmD4LiZIOC4oS7guKPguLHguIfguKrguLTguJU!5e0!3m2!1sen!2sth!4v1636262956147!5m2!1sen!2sth"
          width="600"
          height="450"
          loading="lazy"
          title="my-location"
        ></iframe>
      </div>
    </div>
  );
};
export default ContactPage;
