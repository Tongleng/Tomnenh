import React, { useState, useEffect } from "react";
import axios from "axios";

// import React from 'react';

import Card from '../../components/card/Card'
import "./AboutPage.css";

// import AboutCoverImage from '../../../assets/image/about-cover.jpg'

const AboutPage = (props) => {
  
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3002/api/about")
        .then((res) => {
            console.log(res);

            const responseData = res.data.abouts[0];
            setAbouts(responseData);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
  return (
    <div className="about-page">
      <div className="top-container">
            <img src={abouts.image} alt="about-top-img" />
      </div>
      <div className="mid-container">
        <h1>Our Company</h1>
        <center>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus molestiae animi aliquam! Doloremque nihil autem
            veritatis illo mollitia? Ea doloribus fugit ipsum tempore. Dolor
            sapiente id consectetur aperiam dignissimos in. Necessitatibus
            veniam voluptas alias, temporibus velit pariatur sed ducimus,
            recusandae neque qui libero. A, omnis perferendis? Inventore
            repellat accusantium vitae, amet iusto, odio earum, incidunt cumque
            fugit pariatur optio eligendi?
          </p>
        </center>
      </div>
      
      <div className="bottom-container">
        <Card id="card"/>
      </div>
    </div>
  );
};
export default AboutPage;
