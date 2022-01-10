import React, { useState, useEffect } from "react";
import "./ProductContainer.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";

import axios from "axios";

import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    AOS.init({duration: 1000});
  },[])

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/product")

      .then((res) => {
        console.log(res);

        const responseData = res.data.products;

        setProducts(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <Box className="product-container">
        {products.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} className="card-item" data-aos="fade-up">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="image-card"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};
export default ProductContainer;
