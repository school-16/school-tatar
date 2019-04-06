import React from 'react';
import { Switch, Route } from 'react-router';
import HomePageContainer from './containers/HomePage';
import CoursesPageContainer from './containers/CoursesPage/index';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePageContainer} />
    <Route path="/courses" component={CoursesPageContainer} />
  </Switch>
);

export default App;