import React from 'react';

import HomeSlider from "../../components/slider/Home-Slider";

import { Link } from "react-router-dom";
import {
  FaCartPlus,
  FaHandsHelping,
  FaHandHoldingUsd,
  FaShippingFast
} from "react-icons/fa";

// import Loading from "../../../shared/components/uielements/Loading";
// import TCamLogo from "../../../assets/image/tcambodia.png";
import "./HomePage.css";
import "../../components/animation/Animation.css";
// import Corporaton from '../../components/corporation/Corporation';
import ProductContainer from  '../../components/product-container/ProductContainer'

const HomePage = (props) => {
  

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  // const [loadedUsers, setLoadedUsers] = useState();

  // useEffect(() => {
  //   const sentRequest = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("https://localhost:3002/api/users/");

  //       const responseData = await response.json();

  //       if (!response.ok) {
  //         throw new Error(responseData.message);
  //       }

  //       setLoadedUsers(responseData.data.users);
  //       setIsLoading(false);
  //     } catch (err) {
  //       // setError(err.message)
  //       console.log(err);
  //     }
  //     setIsLoading(false);
  //   };
  //   sentRequest();
  // });

  return (
    <div className="home-page">
      <HomeSlider />
      <center>
        <h1>Assists</h1>
        <div className="assist-contiainer">
          <div className="assist-item">
            <Link to="/service">
              <FaCartPlus className="icon-spin" />
            </Link>
            <p>Help to Order</p>
          </div>

          <div className="assist-item">
            <Link to="/service">
              <FaHandsHelping className="icon-spin" />
            </Link>
            <p>Help to Negotiate</p>
          </div>

          <div className="assist-item">
            <Link to="/service">
              <FaHandHoldingUsd className="icon-spin" />
            </Link>
            <p>Help to Buy</p>
          </div>

          <div className="assist-item">
            <Link to="/service">
              <FaShippingFast className="icon-spin" />
            </Link>
            <p>Help to Shipping</p>
          </div>
        </div>
      </center>
      <center>
        <ProductContainer />
      </center>
      {/* <Corporaton /> */}
    </div>
  );
};

export default HomePage;
