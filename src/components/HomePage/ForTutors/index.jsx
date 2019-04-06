import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faUserFriends,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const ForTutors = () => (
  <section className="HomePage__ForTutors">
    <div className="container">
      <h3>The best way to teach</h3>
      <div className="HomePage__ForTutors__line" />
      <div className="row">
        <div className="col">
          <FontAwesomeIcon icon={faUserFriends} size="6x" />
          <h4>Manage curriculum and lessons</h4>
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faClipboardCheck} size="6x" />
          <h4>Get the best students</h4>
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faChartLine} size="6x" />
          <h4>Keep them motivated</h4>
        </div>
      </div>
    </div>
  </section>
);

export default ForTutors;
