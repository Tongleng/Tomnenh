import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Card.css";

const Card = (props) => {
    const [abouts, setAbouts] = useState([]);

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
        <div className="card" key={item._id}>
          <div className="image-container">
            <img src={item.image} alt="card1" />
          </div>
          <div className="text-container">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
