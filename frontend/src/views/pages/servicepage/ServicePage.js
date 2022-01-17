import React, { useState, useEffect } from "react"
import axios from "axios"
import "./ServicePage.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

import Loading from "../../../shared/components/uielements/Loading"

const ServicePage = (props) => {
  const [services, setServices] = useState([])
  const [loadding, setLoading] = useState(true)

  useEffect(
    () => {
      axios
        .get("http://localhost:3002/api/service")
        .then((res) => {
          console.log(res)

          const responseData = res.data.services
          setServices(responseData)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    [],
    setTimeout(() => setLoading(false), 500)
  )
  useEffect(() => {
    AOS.init({duration: 500})
  })
  return (
    <div className="service-page">
      {loadding && <Loading />}
      {services.map((service) => (
        <div className="service-card" data-aos="fade-up">
          <div className="image-card-conatiner">
            <img src={service.image} alt="card" />
          </div>
          <div className="content-card-container">
            <h1>
              <li>
              {service.title}
                </li></h1>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ServicePage
