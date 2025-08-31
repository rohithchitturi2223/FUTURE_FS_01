import React from "react";
import heroImg from "../assets/banner.jpg"; // Add your hero image here

const Hero = () => {
  return (
    <div className="text-center bg-warning text-dark py-5">
      <h1 className="fw-bold display-4">Get Start Your Favorite Shopping</h1>
      <p className="lead">Find the best deals on fashion, electronics, and more!</p>
      <button className="btn btn-dark btn-lg mt-3">Shop Now</button>
    </div>
  );
};

export default Hero;
