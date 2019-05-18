import React from "react";
import PropTypes from "prop-types";
import CourseCard from "./CourseCard";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.css";

const CoursesPage = ({ courses }) => (
  <div className="CoursesPage layout">
    <Header />
    <div className="container">
      <h1>Классы</h1>
      {courses.map(course => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
    <Footer />
  </div>
);

CoursesPage.propTypes = {
  courses: PropTypes.array
};

export default CoursesPage;
