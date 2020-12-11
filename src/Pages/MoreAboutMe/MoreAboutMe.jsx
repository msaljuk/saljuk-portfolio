import React, { useEffect, useState } from "react";

import { getMoreAboutMePage } from "../../Network/contentful";

import DynamicPage from "../../Pages/DynamicPage/DynamicPage";

import Loader from "../../Components/Loader/Loader";

import styles from "./MoreAboutMe.module.scss";

const MoreAboutMe = () => {
  const [moreAboutMePage, setMoreAboutMePage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const moreAboutMePageData = await getMoreAboutMePage();
      if (moreAboutMePageData) {
        setMoreAboutMePage(moreAboutMePageData.fields);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageHeader}>More About Me</h1>

      {moreAboutMePage ? (
        <DynamicPage
          props={{ pageID: moreAboutMePage.portfolioEntries[0].sys.id }}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MoreAboutMe;
