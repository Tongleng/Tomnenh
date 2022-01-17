import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaFacebookMessenger, FaTelegram, FaPhoneAlt } from "react-icons/fa";

import "./Card.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = (props) => {
    const [abouts, setAbouts] = useState([]);

    const contactIcon = {
      messenger: "FaFacebookMessenger",
      telegram: "FaFacebookMessenger",
      phone: "FaPhoneAlt"
    }

    useEffect(() => {
      AOS.init({duration: 1000})
    })

    useEffect(() => {
        axios
        .get("http://localhost:3002/api/about")
        .then((res) => {
            console.log(res);

            const responseData = res.data.abouts;
            setAbouts(responseData);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

  return (
    <>
      {abouts.map((item) => (
        <div className="card" key={item._id} data-aos="fade-out">
          <div className="image-container">
            <img src={item.image} alt="card1" />
          </div>
          <div className="text-container">
            <h3>{item.agencyName}</h3>
            <div className="about-icons" >
              {
                contactIcon.map((i) => (
                  <a>
                  
                  </a>
                ))
              }
              {/* <a href="/">
                <FaFacebookMessenger />
              </a>
              <a href="/">
                <FaTelegram />
                
                  
              </a>
              <a href="/">
                <FaPhoneAlt />
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
