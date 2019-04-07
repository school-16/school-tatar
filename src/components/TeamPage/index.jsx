import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import TeamMate from "./TeamMate";

const TeamPage = () => (
  <div className="TeamPage layout">
    <Header />
    <div className="container">
      <h1>
        Meet <code>Best Team Ever</code> Teammates
      </h1>
      <TeamMate
        avatar="https://vk.com/images/deactivated_hid_200.gif"
        name="Rasul"
        grade={10}
      />
      <TeamMate
        avatar="https://vk.com/images/deactivated_hid_200.gif"
        name="Niyaz"
        grade={7}
      />
      <TeamMate
        avatar="https://vk.com/images/deactivated_hid_200.gif"
        name="Alsu"
        grade={7}
        email="alsukasim2005@mail.ru"
      />
      <TeamMate
        avatar="https://vk.com/images/deactivated_hid_200.gif"
        name="Daniyar"
        grade={6}
        email="daniarnigam6@mail.ru"
      />
      <TeamMate
        avatar="https://vk.com/images/deactivated_hid_200.gif"
        name="Fangiz"
        grade={6}
        email="fatterov77@mail.ru"
      />
    </div>
    <Footer />
  </div>
);

export default TeamPage;
