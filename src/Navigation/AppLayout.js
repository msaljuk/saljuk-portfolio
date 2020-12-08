import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Code from "../Pages/Code/Code";
import Design from "../Pages/Design/Design";
import Home from "../Pages/Home/Home";
import MoreAboutMe from "../Pages/MoreAboutMe/MoreAboutMe";

const AppLayout = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/design">
        <Design />
      </Route>
      <Route exact path="/code">
        <Code />
      </Route>
      <Route exact path="/moreaboutme">
        <MoreAboutMe />
      </Route>

      {/* For any unmatched route, redirect to landing. */}
      <Redirect to="/" />
    </Switch>
  );
};

export default AppLayout;
