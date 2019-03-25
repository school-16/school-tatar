import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import ForStudents from './components/ForStudents';
import ForTutors from './components/ForTutors';
import Footer from './components/Footer';

const AppLanding = () => (
  <div className="AppLanding">
    <Header />
    <Banner />
    <Features />
    <ForStudents />
    <ForTutors />
    <Footer />
  </div>
);

export default AppLanding;