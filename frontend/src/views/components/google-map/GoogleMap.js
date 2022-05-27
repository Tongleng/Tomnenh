import React from "react"
import './GoogleMap.css'

import axios from "axios"
import { useState, useEffect } from "react";


const GoogleMap = (props) => {

  const [googleMap, setGoogleMap] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/googlemap")
      .then((res) => {
        console.log(res)

        const responseData = res.data.googleMap
        setGoogleMap(responseData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div>
      {
        googleMap.map((m) => (
          <div key={m._id} className="google-map">
            <iframe
              src={`${m.googlemapurl}`}
              width="600"
              height="450"
              loading="lazy"
              title="my-location"
            ></iframe>     
          </div>
        ))
      }
    </div>
  )
}
export default GoogleMap
