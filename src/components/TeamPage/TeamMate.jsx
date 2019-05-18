import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const TeamMate = ({ avatar, name, grade, email }) => (
  <div className="TeamPage__TeamMate">
    <div className="TeamPage__TeamMate__cover">
      <img src={avatar} />
    </div>
    <div className="TeamPage__TeamMate__content">
      <h2>
        {name} {grade && <small>{grade} grade student</small>}
      </h2>
      <p>email: {email ? <a href={`mailto:${email}`}>{email}</a> : "-"}</p>
    </div>
  </div>
);

TeamMate.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  grade: PropTypes.number,
  email: PropTypes.string
};

export default TeamMate;
