import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { Card } from "react-bootstrap";
import GoogleFontLoader from "react-google-font-loader";
import Typing from "react-typing-animation";

import styles from "./TypographyCardModule.module.scss";

const TypographyCardModule = ({ defaultTheme, index, props }) => {
  const { fontDescription, fontName, fontWeight } = props.fields;

  return (
    <div>
      <GoogleFontLoader
        fonts={[
          {
            font: fontName,
            weights: [fontWeight],
          },
        ]}
      />

      <Card
        className={styles.cardContainer}
        bg={defaultTheme ? "light" : "secondary"}
        text={defaultTheme ? "dark" : "light"}
      >
        <Card.Header className={styles.cardHeader}>Typography</Card.Header>
        <Card.Body className={styles.cardBody}>
          <h1 className={styles.fontName} style={{ fontFamily: fontName }}>
            {fontName}
          </h1>
          <Typing speed={500}>
            <div className={styles.typingText} style={{ fontFamily: fontName }}>
              The quick brown fox jumped over the lazy dog.
            </div>
          </Typing>
          <div className={styles.fontDescription}>
            {documentToReactComponents(fontDescription)}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TypographyCardModule;
