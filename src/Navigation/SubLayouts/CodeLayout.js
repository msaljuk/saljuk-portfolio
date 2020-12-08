import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Code from "../../Pages/Code/Code";
import DynamicPage from "../../Pages/DynamicPage/DynamicPage";

const CodeLayout = ({ routes }) => {
  return (
    <Switch>
      <Route exact path="/code">
        <Code />
      </Route>

      {routes &&
        routes.map((route) => {
          return (
            <Route exact path={`/code/${route}`} component={DynamicPage} />
          );
        })}
    </Switch>
  );
};

export default CodeLayout;
