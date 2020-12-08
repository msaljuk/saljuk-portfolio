import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { getCodePageRoutes, getDesignPageRoutes } from "../Network/contentful";

import CodeLayout from "./SubLayouts/CodeLayout";
import DesignLayout from "./SubLayouts/DesignLayout";

import Home from "../Pages/Home/Home";
import MoreAboutMe from "../Pages/MoreAboutMe/MoreAboutMe";

const AppLayout = () => {
  const [codePageRoutes, setCodePageRoutes] = useState();
  const [designPageRoutes, setDesignPageRoutes] = useState();

  useEffect(() => {
    const fetchCodePageRoutes = async () => {
      const codePageRoutesData = await getCodePageRoutes();
      if (codePageRoutesData) {
        setCodePageRoutes(codePageRoutesData.fields.pageRoutes);
      }
    };

    const fetchDesignPageRoutes = async () => {
      const designPageRoutesData = await getDesignPageRoutes();
      if (designPageRoutesData) {
        setDesignPageRoutes(designPageRoutesData.fields.pageRoutes);
      }
    };

    fetchCodePageRoutes();
    fetchDesignPageRoutes();
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/design">
        <DesignLayout routes={designPageRoutes} />
      </Route>
      <Route path="/code">
        <CodeLayout routes={codePageRoutes} />
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
