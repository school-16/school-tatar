import React from "react";
import Button from "../../_lib/Button";
import "./styles.scss";

const Banner = () => (
  <section className="HomePage__Banner">
    <video className="HomePage__Banner__video" autoPlay muted loop>
      <source src="/assets/coding.mp4" type="video/mp4" />
    </video>
    <div className="HomePage__Banner__overlay">
      <div className="container">
        <h1>Welcome To Code School</h1>
        <h2>Learn professions of future today</h2>
        <Button>Get Started</Button>
      </div>
      <img src="/assets/bottom_shape.svg" />
    </div>
  </section>
);

export default Banner;
