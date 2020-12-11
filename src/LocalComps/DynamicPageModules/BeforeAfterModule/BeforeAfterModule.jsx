import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import ImageCardModule from "../ImageCarouselModule/ImageCardModule/ImageCardModule";

import styles from "./BeforeAfterModule.module.scss";

const BeforeAfterModule = ({ defaultTheme, index, props }) => {
  const { images } = props.fields;

  return (
    <Card
      className={styles.cardContainer}
      bg={defaultTheme ? "light" : "secondary"}
      text={defaultTheme ? "dark" : "light"}
    >
      <Card.Header className={styles.cardHeader}>
        Before and After Comparison
      </Card.Header>
      {images && (
        <Row>
          {images.map((image) => {
            return (
              <Col xs={12} lg={6}>
                <ImageCardModule
                  props={{
                    alt: image.fields.title,
                    title: image.fields.title,
                    src: image.fields.file.url,
                  }}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </Card>
  );
};

export default BeforeAfterModule;
