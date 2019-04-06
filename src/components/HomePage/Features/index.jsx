import React from "react";
import "./styles.scss";

const Features = () => (
  <section className="HomePage__Features">
    <div className="container">
      <h3>Easy steps to accomplish</h3>
      <div className="HomePage__Features__steps">
        <div className="HomePage__Features__step">
          <strong>1</strong> Go to class
        </div>
        <div className="HomePage__Features__step">
          <strong>2</strong> Refresh what you have learned at home
        </div>
        <div className="HomePage__Features__step">
          <strong>3</strong> Test youself
        </div>
      </div>
    </div>
  </section>
);

export default Features;
