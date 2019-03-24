import React from "react";
import Button from "../../../lib/Button";
import "./styles.scss";

const Banner = () => (
  <div className="AppLanding__Banner">
    <video className="AppLanding__Banner__video" autoPlay muted loop>
      <source src="/assets/coding.mp4" type="video/mp4" />
    </video>
    <div className="AppLanding__Banner__overlay">
      <div className="container">
        <h1>Welcome To Code School</h1>
        <h2>Learn professions of future today</h2>
        <Button>Get Started</Button>
      </div>
    </div>
  </div>
);

export default Banner;
