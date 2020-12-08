import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Design from "../../Pages/Design/Design";
import DynamicPage from "../../Pages/DynamicPage/DynamicPage";

const DesignLayout = ({ routes }) => {
  return (
    <Switch>
      <Route exact path="/design">
        <Design />
      </Route>

      {routes &&
        routes.map((route) => {
          return (
            <Route exact path={`/design/${route}`} component={DynamicPage} />
          );
        })}
    </Switch>
  );
};

export default DesignLayout;
