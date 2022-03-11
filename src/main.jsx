import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import QuotesApp from "./QuotesApp";
import jquery from "jquery";

ReactDOM.render(
  <React.StrictMode>
    <QuotesApp />
  </React.StrictMode>,
  document.getElementById("root")
);
