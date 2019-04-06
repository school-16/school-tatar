import React from "react";
import { Switch, Route } from "react-router";
import HomePageContainer from "./containers/HomePage";
import CoursesPageContainer from "./containers/CoursesPage/index";
import NotFoundPageContainer from "./components/NotFoundPage";
import TeamPageContainer from "./containers/TeamPage";

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePageContainer} />
    <Route path="/courses" component={CoursesPageContainer} />
    <Route path="/team" component={TeamPageContainer} />
    <Route path="*" component={NotFoundPageContainer} />
  </Switch>
);

export default App;
