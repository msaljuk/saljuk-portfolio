import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Code from "./pages/Code/Code";
import Design from "./pages/Design/Design";
import Home from "./pages/Home/Home";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="/code">
          <Code />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
