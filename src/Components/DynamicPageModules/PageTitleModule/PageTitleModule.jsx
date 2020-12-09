import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import styles from "./PageTitleModule.module.scss";

const PageTitleModule = ({ props }) => {
  const {
    overview,
    pageImage,
    pageSections,
    publishedOn,
    subtitle,
    title,
  } = props;

  const dateOptions = {
    year: "numeric",
    month: "long",
  };
  const publishedDate = new Date(publishedOn).toLocaleString(
    "en-EN",
    dateOptions
  );

  return (
    <Row>
      <Col xs={12} lg={4}>
        <div className={styles.landingImageCard}>
          <img
            className={styles.landingImage}
            src={pageImage.fields.file.url}
          />
        </div>
      </Col>
      <Col xs={12} lg={8} style={{ padding: 0 }}>
        <Card className={styles.landingCard} bg="white" text="dark">
          <Card.Body>
            <Card.Title className={styles.projectTitle}>{title}</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontSize: "20px" }}
            >
              {subtitle} | {publishedDate}
            </Card.Subtitle>
            <Card.Text className={styles.projectOverview}>
              {overview.content[0].content[0].value}
            </Card.Text>
            <Row className={styles.pageSectionButtons}>
              {pageSections &&
                pageSections.map((pageSection) => {
                  return (
                    <Col xs={12} lg={4}>
                      <Button
                        className={styles.pageSectionButton}
                        href={`#${pageSection}`}
                        variant="outline-primary"
                      >
                        {pageSection}
                      </Button>
                    </Col>
                  );
                })}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PageTitleModule;
