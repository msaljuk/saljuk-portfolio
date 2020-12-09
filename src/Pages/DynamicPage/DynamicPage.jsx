import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getContentFromEntry } from "../../Network/contentful";

import Loader from "../../Components/Loader/Loader";

import { contentTypeToModule, getContentType, routeToPageEntry } from "./utils";

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

  if (dynamicPageData === undefined) {
    return <Loader />;
  }

  return (
    <div>
      {dynamicPageData &&
        dynamicPageData.map((module, idx) => {
          const contentType = getContentType(module);
          const ContentModule = contentTypeToModule[contentType];

          return <ContentModule index={idx} props={module} />;
        })}
    </div>
  );
};

export default DynamicPage;
