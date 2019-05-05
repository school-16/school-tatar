import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

const Footer = () => (
  <footer className="HomePage__Footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-9">
          <h4>Школа16</h4>
          <span>The Best Team Ever - 2019 &copy;</span>
        </div>
        <div className="col-3">
          <strong>Ссылки</strong>
          <ul>
            <li>
              <Link to="/team">Команда</Link>
            </li>
            <li>
              <Link to="/about">О проекте</Link>
            </li>
          </ul>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faVk} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
