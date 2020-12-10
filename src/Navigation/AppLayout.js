import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { getPageRoutes } from "../Network/contentful";

import Code from "../Pages/Code/Code";
import Design from "../Pages/Design/Design";
import DynamicPage from "../Pages/DynamicPage/DynamicPage";
import Home from "../Pages/Home/Home";
import MoreAboutMe from "../Pages/MoreAboutMe/MoreAboutMe";

const AppLayout = () => {
  const [pageRoutes, setPageRoutes] = useState([]);

  useEffect(() => {
    const fetchPageRoutes = async () => {
      const pageRoutesData = await getPageRoutes();
      if (pageRoutesData) {
        const pageRoutes = [];

        for (let i = 0; i < pageRoutesData.fields.pageRoutes.length; i++) {
          pageRoutes.push({
            pageRoute: pageRoutesData.fields.pageRoutes[i].fields.pageRoute,
            pageID:
              pageRoutesData.fields.pageRoutes[i].fields.pageReference.sys.id,
          });
        }

        setPageRoutes(pageRoutes);
      }
    };

    fetchPageRoutes();
  }, []);

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

      {pageRoutes &&
        pageRoutes.map((route) => {
          return (
            <Route exact path={route.pageRoute}>
              <DynamicPage props={{ pageID: route.pageID }} />
            </Route>
          );
        })}
    </Switch>
  );
};

export default AppLayout;
