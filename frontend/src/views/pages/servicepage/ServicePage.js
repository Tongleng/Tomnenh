import React, { useState, useEffect } from 'react';
import axios from "axios";
import './ServicePage.css';

import Loading from '../../../shared/components/uielements/Loading';

const ServicePage = props => {

    const [ services, setServices ] = useState([])
    const [ loadding, setLoading ] = useState(true)

    useEffect(() => {
        axios
        .get("http://localhost:3002/api/service")
        .then((res) => {
            console.log(res)
            
            const responseData = res.data.services;
            setServices(responseData);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [],
        setTimeout(() => setLoading(false), 1000)
    )
    return (
        <div className="service-page">
            {
                loadding && <Loading />
            }
            {
                services.map((service) =>(
                    <div className='service-card'>
                        <div className="service-page-image-container">
                            <img src={service.image} alt="service" />
                        </div>
                        <div className="service-page-content-container">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export default ServicePage;