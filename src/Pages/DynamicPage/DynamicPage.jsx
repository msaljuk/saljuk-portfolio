import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getContentFromEntry } from "../../Network/contentful";

import { contentTypeToModule, getContentType, routeToPageEntry } from "./utils";

import styles from "./DynamicPage.module.scss";

const DynamicPage = () => {
  const [dynamicPageData, setDynamicPageData] = useState();
  const location = useLocation();

  useEffect(() => {
    const route = location.pathname;
    const pageEntryID = routeToPageEntry[route];

    const fetchData = async () => {
      const data = await getContentFromEntry(pageEntryID);
      if (data) {
        setDynamicPageData(data.fields.pageModules);
      }
    };

    if (pageEntryID !== undefined) {
      fetchData();
    }
  }, [location]);

  return (
    <div>
      {dynamicPageData &&
        dynamicPageData.map((module) => {
          const contentType = getContentType(module);
          const ContentModule = contentTypeToModule[contentType];

          return <ContentModule props={module.fields} />;
        })}
    </div>
  );
};

export default DynamicPage;
