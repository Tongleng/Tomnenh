import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa";

import './Corporation.css';

const Corporaton = (props) => {
  const [corporations, setCorporations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/corporation")
      .then((res) => {
        const responseData = res.data.corporations;
        setCorporations(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="corporation-container">
      <center>
        <h1>Cooperation</h1>
      </center>
      <center>
        {corporations.map((item) => (
          <div className="home-bottom-container">
            <div className="home-bottom-image-container">
              <img id="cooperate-logo" src={item.image} alt="tcambodia" />
            </div>
            <div className="home-bottom-text-container">
              <h1>{item.companyname}</h1>
              <p>{item.description}</p>
              <p>{item.address}</p>
              {/* <p>
                {
                  item.map((c) => (
                    <p>{c.phone}</p>
                  ))
                }
              </p> */}
              <p>{item.email}</p>
              <div className="visit-button">
                <a href="https://tcambodia.com">
                  <p>Visit</p>
                  <FaChevronRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
};

export default Corporaton;