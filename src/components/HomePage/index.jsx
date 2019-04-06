import React from "react";
import Header from "../Header";
import Banner from "./Banner";
import Features from "./Features";
import ForStudents from "./ForStudents";
import ForTutors from "./ForTutors";
import Footer from "../Footer";

const HomePage = () => (
  <div className="HomePage">
    <Header absolute style="light" />
    <Banner />
    <Features />
    <ForStudents />
    <ForTutors />
    <Footer />
  </div>
);

export default HomePage;
