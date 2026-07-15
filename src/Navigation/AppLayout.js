import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/design" element={<Design />} />
      <Route
        path="/code/*"
        element={<Code props={{ entries: codePageRoutes }} />}
      />
      <Route path="/moreaboutme" element={<MoreAboutMe />} />

      {designPageRoutes.map((route) => (
        <Route
          key={route.pageRoute}
          path={route.pageRoute}
          element={<DynamicPage props={{ pageID: route.pageID }} />}
        />
      ))}
    </Routes>
  );
};

export default AppLayout;
