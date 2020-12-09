import React, { useEffect, useState } from "react";

import { getContentFromEntry } from "../../../Network/contentful";

import {
  contentTypeToModule,
  getContentType,
} from "../../../Pages/DynamicPage/utils";

import styles from "./PageSectionModule.module.scss";

const PageSectionModule = ({ index, props }) => {
  const [pageSectionData, setPageSectionData] = useState();

  const { id } = props.sys;
  const { sectionId, sectionName } = props.fields;

  const defaultTheme = index % 2 === 0;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentFromEntry(id);
      if (data) {
        setPageSectionData(data.fields.sectionModules);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div
      className={
        defaultTheme ? styles.defaultContainer : styles.alternateContainer
      }
      id={sectionId}
    >
      <h1 className={styles.sectionHeading}>{sectionName}</h1>
      {pageSectionData &&
        pageSectionData.map((module, idx) => {
          const contentType = getContentType(module);
          const ContentModule = contentTypeToModule[contentType];

          return (
            <ContentModule
              defaultTheme={defaultTheme}
              index={idx}
              props={module}
            />
          );
        })}
    </div>
  );
};

export default PageSectionModule;
