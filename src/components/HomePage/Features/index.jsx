import React from "react";
import "./styles.css";

const Features = () => (
  <section className="HomePage__Features">
    <div className="container">
      <h3>Лёгкие шаги к успеху.</h3>
      <div className="HomePage__Features__steps">
        <div className="HomePage__Features__step">
          <strong>1</strong> Перейти в класс.
        </div>
        <div className="HomePage__Features__step">
          <strong>2</strong> Повтори, что ты изучал дома.
        </div>
        <div className="HomePage__Features__step">
          <strong>3</strong> Проверь себя.
        </div>
      </div>
    </div>
  </section>
);

export default Features;
