import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppLayout from "./Navigation/AppLayout";

import CustomNavbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <AppLayout />
    </Router>
  );
};

export default App;
