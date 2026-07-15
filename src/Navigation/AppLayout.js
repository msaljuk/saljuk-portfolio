import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { getPageRoutes } from "../Network/contentful";

import AssetPage from "../Pages/AssetPage/AssetPage";
import Code from "../Pages/Code/Code";
import Design from "../Pages/Design/Design";
import DynamicPage from "../Pages/DynamicPage/DynamicPage";
import Home from "../Pages/Home/Home";
import MoreAboutMe from "../Pages/MoreAboutMe/MoreAboutMe";

const STATIC_ASSET_PAGE_TYPE = "staticasset";
const STATIC_ASSET_CONTENT_TYPE = "staticassetpage";

const normalizePath = (path) => {
  if (!path || typeof path !== "string") {
    return null;
  }
  return path.startsWith("/") ? path : `/${path}`;
};

const isStaticAssetRoute = ({ pageType, pageRoute, pageReference }) => {
  const type = String(pageType || "")
    .trim()
    .toLowerCase();
  const contentType = pageReference?.sys?.contentType?.sys?.id
    ?.trim()
    ?.toLowerCase();

  return (
    type === STATIC_ASSET_PAGE_TYPE ||
    contentType === STATIC_ASSET_CONTENT_TYPE ||
    pageRoute.startsWith("/research/")
  );
};

const AppLayout = () => {
  const [codePageRoutes, setCodePageRoutes] = useState([]);
  const [designPageRoutes, setDesignPageRoutes] = useState([]);
  const [staticAssetRoutes, setStaticAssetRoutes] = useState([]);

  useEffect(() => {
    const fetchPageRoutes = async () => {
      try {
        const pageRoutesData = await getPageRoutes();
        if (!pageRoutesData?.fields?.pageRoutes) {
          return;
        }

        const localCodePageRoutes = [];
        const localDesignPageRoutes = [];
        const localStaticAssetRoutes = [];

        for (const routeEntry of pageRoutesData.fields.pageRoutes) {
          if (!routeEntry?.fields) {
            continue;
          }

          const { pageName, pageType, pageReference } = routeEntry.fields;
          const pageRoute = normalizePath(routeEntry.fields.pageRoute);
          const pageID = pageReference?.sys?.id;

          if (!pageRoute || !pageID) {
            console.warn(
              "Skipping page route missing path or pageReference:",
              routeEntry.fields.pageRoute || routeEntry.sys?.id
            );
            continue;
          }

          if (isStaticAssetRoute({ pageType, pageRoute, pageReference })) {
            localStaticAssetRoutes.push({ pageID, pageRoute });
          } else if (pageRoute.includes("/design")) {
            localDesignPageRoutes.push({ pageID, pageRoute });
          } else {
            localCodePageRoutes.push({
              pageID,
              pageName,
              pageRoute,
              pageType,
            });
          }
        }

        setCodePageRoutes(localCodePageRoutes);
        setDesignPageRoutes(localDesignPageRoutes);
        setStaticAssetRoutes(localStaticAssetRoutes);
      } catch (err) {
        console.error("Failed to load page routes:", err);
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

      {staticAssetRoutes.map((route) => (
        <Route
          key={route.pageRoute}
          path={route.pageRoute}
          element={<AssetPage props={{ pageID: route.pageID }} />}
        />
      ))}
    </Routes>
  );
};

export default AppLayout;
