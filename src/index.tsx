import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import store from "@state/index";

import Home from "@pages/home";

import reportWebVitals from "./reportWebVitals";

import "@styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <Home />
  </Provider>,
);

reportWebVitals();
