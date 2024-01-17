import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import './index.css';

// Render the App component within the Router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  // Mount the rendered component into the HTML root element with the id "root"
  document.getElementById("root")
);
