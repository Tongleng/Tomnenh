import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa"

import LogoImg from "../../../assets/logo/logo.png"

import axios from "axios"

import AOS from "aos"
import "aos/dist/aos.css"

import "./MainFooter.css"

const MainFooter = (props) => {
  const [socialMedia, setSocialMedia] = useState([])

  useEffect(() => {
      axios
        .get("http://localhost:3002/api/social")
        .then((res) => {
            console.log(res);

            const responseData = res.data.socialMedia;
            setSocialMedia(responseData)
        })
        .catch((err) => {
            console.log(err);
        })
  },[])

  useEffect(() => {
    AOS.init({ duration: 1000 })
  })
  return (
    <footer className="main-footer">
      <div className="main-footer__left-side">
        <a href="/" className="logo-title">
          <img
            id="logo-size"
            className="logo-image-size"
            src={LogoImg}
            alt="logo"
          />
          <h3>Tomnenh</h3>
        </a>
        {socialMedia.map((item) => (
            
          <div key={item._id} className="main-footer__social-media">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div>
                <a href={item.facebookUrl}>
                    <FaFacebook />
                </a>
                <a href={item.instagramUrl}>
                    <FaInstagram />
                </a>
                <a href={item.telegramUrl}>
                    <FaTelegram />
                </a>
            </div>
          </div>
        ))}
      </div>
      <div className="main-footer__center">
        <h3>Site Map</h3>
        <NavLink to="/service">Our Service</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </div>
      <div className="main-footer__right-side">
        <h3>Working Hour</h3>
        <p>Monday-Sunday : 08:00-17:00</p>
      </div>
    </footer>
  )
}
export default MainFooter
