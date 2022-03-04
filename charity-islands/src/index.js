import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Components
import { BrowserRouter } from "react-router-dom";

// Style
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
