import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => (
  <header className="AppLanding__Header">
    <div className="AppLanding__Header__logo">School 16</div>
    <nav>
      <ul>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/sign_up/tutor">For Tutors</Link>
        </li>
        <li>
          <Link to="/sign_up/student">For Students</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
