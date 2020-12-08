import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import { getDesignPage } from "../../Network/contentful";

import PortfolioOverviewCard from "../../Components/PortfolioOverviewCard/PortfolioOverviewCard";

import styles from "./Design.module.scss";

const Design = () => {
  const [designPage, setDesignPage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const designPageData = await getDesignPage();
      if (designPageData) {
        setDesignPage(designPageData.fields.portfolioEntries);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageHeader}>Design Portfolio</h1>

      <Row className={styles.cardContainer}>
        {designPage &&
          designPage.map((portfolioItem) => {
            return <PortfolioOverviewCard portfolioItem={portfolioItem} />;
          })}
      </Row>
    </div>
  );
};

export default Design;
