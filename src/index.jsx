import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Root from "./Root";
import configureStore, { history } from "./store/configureStore";
import "./styles.scss";
// import 'font-awesome/scss/font-awesome.scss';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("app")
);
