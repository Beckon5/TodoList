import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers";
import "./index.css";
import App from "./App.js";
//i18n
import './i18n';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
