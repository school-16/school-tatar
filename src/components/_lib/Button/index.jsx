import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Button = ({ to, children, ...restProps }) => {
  if (to) {
    return (
      <Link className="Button" to={to} {...restProps}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className="Button" {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
