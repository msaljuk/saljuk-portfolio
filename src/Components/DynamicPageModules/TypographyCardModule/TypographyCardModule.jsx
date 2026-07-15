import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useMemo } from "react";
import { Card } from "react-bootstrap";

import GoogleFontLoader from "../../GoogleFontLoader/GoogleFontLoader";
import TypingText from "../../TypingText/TypingText";

import styles from "./TypographyCardModule.module.scss";

const TypographyCardModule = ({ defaultTheme, props }) => {
  const { fontDescription, fontName, fontWeight } = props.fields;
  const fonts = useMemo(
    () => [
      {
        font: fontName,
        weights: [fontWeight],
      },
    ],
    [fontName, fontWeight]
  );

  return (
    <div>
      <GoogleFontLoader fonts={fonts} />

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
          <TypingText
            className={styles.typingText}
            speed={40}
          >
            <span style={{ fontFamily: fontName }}>
              The quick brown fox jumped over the lazy dog.
            </span>
          </TypingText>
          <div className={styles.fontDescription}>
            {documentToReactComponents(fontDescription)}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TypographyCardModule;
