import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { Card } from "react-bootstrap";

import styles from "./LongTextCardModule.module.scss";

const LongTextCardModule = ({ defaultTheme, index, props }) => {
  const { description, heading } = props.fields;

  return (
    <Card
      className={styles.cardContainer}
      bg={defaultTheme ? "light" : "secondary"}
      text={defaultTheme ? "dark" : "light"}
    >
      <Card.Header className={styles.cardHeader}>{heading}</Card.Header>
      <Card.Body className={styles.cardBody}>
        {documentToReactComponents(description)}
      </Card.Body>
    </Card>
  );
};

export default LongTextCardModule;
