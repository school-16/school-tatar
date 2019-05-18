import React from "react";
import Button from "../../_lib/Button";
import "./styles.css";

const Banner = () => (
  <section className="HomePage__Banner">
    <video className="HomePage__Banner__video" autoPlay muted loop>
      <source src="/assets/coding.mp4" type="video/mp4" />
    </video>
    <div className="HomePage__Banner__overlay">
      <div className="container">
        <h1>Добро пожаловать в школу программирования.</h1>
        <h2>Учим проффесии будущего.</h2>
        <Button>Начать</Button>
      </div>
      <img src="/assets/bottom_shape.svg" />
    </div>
  </section>
);

export default Banner;
