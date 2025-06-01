import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import jwt from "jwt-decode";
import { Navigate } from "react-router-dom";
import { USER_TOKEN_KEY } from "./constants";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log("store.getState()", store.getState());
});

const raw = localStorage.getItem(USER_TOKEN_KEY);
let userData = null;

if (raw) {
  try {
    userData = jwt(raw);
  } catch (e) {
    console.warn("Token invalide → purge", e.message);
    localStorage.removeItem(USER_TOKEN_KEY);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
