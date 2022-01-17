import React, { useEffect } from "react"

import Card from "../../components/card/Card"
import "./AboutPage.css"

import AOS from "aos"
import "aos/dist/aos.css"

// import AboutCoverImage from '../../../assets/image/about-cover.jpg'

const AboutPage = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })
  return (
    <div className="about-page">
      <div className="top-container">
        {/* <img src={abouts.image} alt="about-top-img" /> */}
        <h1>One Vision, We're together.</h1>
        <p>
          Stay home and shop online. You're too pretty to have to look for a
          parking spot.
        </p>
      </div>
      <div className="mid-container" data-aos="fade-out">
        <h1>Our Agency</h1>
      </div>

      <div className="bottom-container">
        <Card id="card" />
      </div>
    </div>
  )
}
export default AboutPage
