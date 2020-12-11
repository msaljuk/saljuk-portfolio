import React, { useEffect, useState } from "react";

import { getContentFromEntry } from "../../Network/contentful";

import Loader from "../../Components/Loader/Loader";

import { contentTypeToModule, getContentType } from "./utils";

const DynamicPage = ({ props }) => {
  const [dynamicPageData, setDynamicPageData] = useState();

  const { pageID } = props;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentFromEntry(pageID);
      if (data) {
        setDynamicPageData(data.fields.pageModules);
      }
    };

    if (pageID !== undefined) {
      fetchData();
    }
  }, [pageID]);

  if (dynamicPageData === undefined) {
    return <Loader />;
  }

  return (
    <div>
      {dynamicPageData &&
        dynamicPageData.map((module, idx) => {
          const contentType = getContentType(module);
          const ContentModule = contentTypeToModule[contentType];

          if (ContentModule === undefined) {
            return null;
          }

          return <ContentModule index={idx} props={module} />;
        })}
    </div>
  );
};

export default DynamicPage;
