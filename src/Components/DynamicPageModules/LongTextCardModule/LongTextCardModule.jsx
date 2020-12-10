import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { Card } from "react-bootstrap";

import styles from "./LongTextCardModule.module.scss";

const LongTextCardModule = ({ defaultTheme, index, props }) => {
  const { description, heading } = props.fields;

  const options = {
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: ({
        content,
        data: {
          target: { fields },
        },
      }) => (
        <a
          alt={fields.title}
          href={fields.file.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {content[0].value}
        </a>
      ),
    },
  };

  return (
    <Card
      className={styles.cardContainer}
      bg={defaultTheme ? "light" : "secondary"}
      text={defaultTheme ? "dark" : "light"}
    >
      <Card.Header className={styles.cardHeader}>{heading}</Card.Header>
      <Card.Body className={styles.cardBody}>
        {documentToReactComponents(description, options)}
      </Card.Body>
    </Card>
  );
};

export default LongTextCardModule;
