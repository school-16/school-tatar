import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import TeamMate from './TeamMate';

const TeamPage = () => (
  <div className="TeamPage layout">
    <Header />
    <div className="container">
      <h1>
        Meet <code>Best Team Ever</code> Teammates
      </h1>
      <TeamMate avatar="https://vk.com/images/deactivated_hid_200.gif" name="Some Guy" />
      <TeamMate avatar="https://vk.com/images/deactivated_hid_200.gif" name="The Girl" />
      <TeamMate avatar="https://vk.com/images/deactivated_hid_200.gif" name="Some Other Guy" />
    </div>
    <Footer />
  </div>
);

export default TeamPage;
