import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
