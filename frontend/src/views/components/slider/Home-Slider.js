import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"

import "./Slider-Animation.css"
import "./Home-Slider.css"

const HomeSlider = (props) => {
  const [sliders, setSliders] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/slider")
      .then((res) => {
        console.log(res)

        const responseData = res.data.sliders
        setSliders(responseData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Slider autoplay={5000} className="slider-wrapper">
      {sliders.map((item) => (
        <div
          key={item._id}
          style={{ background: `url('${item.image}') no-repeat` }}
          className="slider-content"
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {/* <Link to="/">
              <button id="slider-button" >{item.buttontext}</button>
            </Link> */}
            {
              item.buttontext.map((t) => (
                <div>

                <Link to='/service'>
                  <button id="slider-button">{t}</button>
                </Link>
                </div>
              ))
            }
            
          </div>
        </div>
      ))}
    </Slider>
  )
}
export default HomeSlider
