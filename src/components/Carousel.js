import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

import {
  container,
}from './css/objects/features.module.css';
import CustomerCard from './CustomerCard';
import customerData from '../data/CustomerData';

function Carousel() {
  return (
      <div className={container}>
        <ReactCardCarousel autoplay={true} autoplay_speed={8000}>
          {customerData.map((customer) => {
            return (
              <CustomerCard
                customer={customer}
              />);
          })}
        </ReactCardCarousel>
        </div>
);
}

export default Carousel;
