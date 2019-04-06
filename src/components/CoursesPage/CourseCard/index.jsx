import React from "react";
import PropTypes from "prop-types";

const CourseCard = ({ cover, title }) => (
  <div className="CoursesPage__CourseCard">
    <div className="CoursesPage__CourseCard__cover">
      <img src={cover} />
    </div>
    <div className="CoursesPage__CourseCard__content">
      <h2>{title}</h2>
    </div>
  </div>
);

CourseCard.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string
};

export default CourseCard;
