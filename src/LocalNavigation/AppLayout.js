import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { getPageRoutes } from "../Network/contentful";

import Code from "../Pages/Code/Code";
import Design from "../Pages/Design/Design";
import DynamicPage from "../Pages/DynamicPage/DynamicPage";
import Home from "../Pages/Home/Home";
import MoreAboutMe from "../Pages/MoreAboutMe/MoreAboutMe";

const AppLayout = () => {
  const [codePageRoutes, setCodePageRoutes] = useState([]);
  const [designPageRoutes, setDesignPageRoutes] = useState([]);

  useEffect(() => {
    const fetchPageRoutes = async () => {
      const pageRoutesData = await getPageRoutes();
      if (pageRoutesData) {
        const localCodePageRoutes = [];
        const localDesignPageRoutes = [];

        for (let i = 0; i < pageRoutesData.fields.pageRoutes.length; i++) {
          if (
            pageRoutesData.fields.pageRoutes[i].fields.pageRoute.includes(
              "/design"
            )
          ) {
            localDesignPageRoutes.push({
              pageID:
                pageRoutesData.fields.pageRoutes[i].fields.pageReference.sys.id,
              pageRoute: pageRoutesData.fields.pageRoutes[i].fields.pageRoute,
            });
          } else {
            localCodePageRoutes.push({
              pageID:
                pageRoutesData.fields.pageRoutes[i].fields.pageReference.sys.id,
              pageName: pageRoutesData.fields.pageRoutes[i].fields.pageName,
              pageRoute: pageRoutesData.fields.pageRoutes[i].fields.pageRoute,
              pageType: pageRoutesData.fields.pageRoutes[i].fields.pageType,
            });
          }
        }

        setCodePageRoutes(localCodePageRoutes);
        setDesignPageRoutes(localDesignPageRoutes);
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
      <Route path="/code">
        <Code props={{ entries: codePageRoutes }} />
      </Route>
      <Route exact path="/moreaboutme">
        <MoreAboutMe />
      </Route>

      {designPageRoutes &&
        designPageRoutes.map((route) => {
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
