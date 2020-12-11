import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import styles from "./SplitMaxCardModule.module.scss";

const SplitMaxCardModule = ({ defaultTheme, index, props }) => {
  const {
    bgTheme,
    description,
    heading,
    image,
    imageSplitSize,
    title,
    textTheme,
  } = props.fields;

  if (!defaultTheme) {
    defaultTheme = index % 2 === 0;
  }

  return (
    <Card
      className={styles.cardContainer}
      bg={bgTheme ? bgTheme : defaultTheme ? "light" : "secondary"}
      text={textTheme ? textTheme : defaultTheme ? "dark" : "light"}
    >
      {heading && (
        <Card.Header className={styles.cardHeader}>{heading}</Card.Header>
      )}
      <Row>
        <Col className={styles.imageContainer} xs={12} lg={imageSplitSize}>
          <img
            alt={title}
            className={styles.image}
            src={image.fields.file.url}
          />
        </Col>
        <Col className={styles.textContainer} xs={12} lg={12 - imageSplitSize}>
          {title && <div className={styles.cardTitle}>{title}</div>}
          {description && (
            <div className={styles.cardDescription}>
              {documentToReactComponents(description)}
            </div>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default SplitMaxCardModule;
