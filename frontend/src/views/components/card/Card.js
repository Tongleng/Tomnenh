import React, { useState, useEffect } from "react"
import axios from "axios"

import { FaFacebookMessenger, FaTelegram, FaPhoneAlt } from "react-icons/fa"

import "./Card.css"

import AOS from "aos"
import "aos/dist/aos.css"

const Card = (props) => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    AOS.init({ duration: 1000 })
  })

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/about")
      .then((res) => {
        console.log(res)

        const responseData = res.data.abouts
        setAbouts(responseData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {abouts.map((about) => (
        <div className="card" key={about._id} data-aos="fade-out">
          <div className="image-container">
            <img src={about.image} alt="card1" />
          </div>
          <div className="text-container">
            <h3>{about.agencyName}</h3>
            <div className="about-icons">
              <a href={about.messenger}>
                <FaFacebookMessenger />
              </a>
              <a href={about.telegram}>
                <FaTelegram />
              </a>
              <a href={about.phone}>
                <FaPhoneAlt />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
