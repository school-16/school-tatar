import React from "react";
import PropTypes from 'prop-types';

const CourseCard = ({ title }) => (
  <div className="CoursesPage__CourseCard">
    <h2>{title}</h2>
  </div>
);

CourseCard.propTypes = {
  title: PropTypes.string
}

export default CourseCard;
