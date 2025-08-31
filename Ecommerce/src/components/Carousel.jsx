import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Carousel className="mt-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1500x600/4a90e2/ffffff/?text=Featured+Product+1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Featured Product 1</h3>
          <p>Check out our newest product!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1500x600/ff6f61/ffffff/?text=Featured+Product+2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Featured Product 2</h3>
          <p>Limited time offer. Don't miss out!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
