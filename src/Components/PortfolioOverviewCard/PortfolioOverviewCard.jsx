import React from "react";
import { Button, Card, Col } from "react-bootstrap";

import styles from "./PortfolioOverviewCard.module.scss";

const PortfolioOverviewCard = ({ portfolioItem }) => {
  return (
    <Col className={styles.cardColumn} xs={12} md={6} lg={4}>
      <Card style={{ height: "30rem", textAlign: "left" }}>
        <Card.Img
          className={styles.cardImg}
          variant="top"
          src={portfolioItem.fields.image.fields.file.url}
        />
        <Card.Body>
          <Card.Title>{portfolioItem.fields.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {portfolioItem.fields.type}
          </Card.Subtitle>
          <Card.Text className={styles.cardDescription}>
            {portfolioItem.fields.description.content[0].content[0].value}
          </Card.Text>
          <Button
            className={styles.cardButton}
            href={portfolioItem.fields.slug}
            variant="primary"
          >
            Learn more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PortfolioOverviewCard;
