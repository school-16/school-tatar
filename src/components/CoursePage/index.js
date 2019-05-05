import React from "react";
import PropTypes from "prop-types";
// import CourseCard from '../CoursesPage/CourseCard/index';
import Header from "../Header/index";
import Footer from "../Footer/index";
import "./styles.scss";


const CoursePage = ({ cover, title }) => (
  <div className="CoursePage layout">
    <Header />
    <div className="container">
      
      <div className="CoursePage__cover" style={{ backgroundImage: `url(${cover})`}}>
        <h1>{title}</h1>
        <button className="btn btn-dark btn-lg">
          Subscribe
          
        </button>
      </div>
    </div>
    <Footer />
  </div>
);

CoursePage.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string
};

export default CoursePage;
