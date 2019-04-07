import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = ({ absolute, style }) => (
  <header
    className={`HomePage__Header ${
      absolute ? "position__absolute" : ""
    } style__${style}`}
  >
    <div className="HomePage__Header__logo">Школа 16</div>
    <nav>
      <ul>
        <li>
          <Link to="/courses">Классы</Link>
        </li>
        <li>
          <Link to="/sign_up/tutor">Для учителей</Link>
        </li>
        <li>
          <Link to="/sign_up/student">Для учеников</Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.defaultProps = {
  style: "dark"
};

Header.propTypes = {
  absolute: PropTypes.bool,
  style: PropTypes.oneOf(["light", "dark"])
};

export default Header;
