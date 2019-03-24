import React from 'react';
import { Switch, Route } from 'react-router';
import AppLanding from './app-landing/index';

const App = () => (
  <Switch>
    <Route path="/" component={AppLanding} />
  </Switch>
);

export default App;