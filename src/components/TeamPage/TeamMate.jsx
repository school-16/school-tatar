import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const TeamMate = ({ avatar, name }) => (
  <div className="TeamPage__TeamMate">
    <div className="TeamPage__TeamMate__cover">
      <img src={avatar} />
    </div>
    <div className="TeamPage__TeamMate__content">
      <h2>{name}</h2>
    </div>
  </div>
);

TeamMate.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string
};

export default TeamMate;
