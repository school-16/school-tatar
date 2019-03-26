import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './containers/HomePage';

const App = () => (
  <Switch>
    <Route path="/" component={HomePage} />
  </Switch>
);

export default App;