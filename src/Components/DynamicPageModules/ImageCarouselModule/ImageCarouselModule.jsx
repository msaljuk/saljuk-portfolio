import React from "react";
import { Col, Row } from "react-bootstrap";

import ImageCardModule from "./ImageCardModule/ImageCardModule";

import styles from "./ImageCarouselModule.module.scss";

const ImageCarouselModule = ({ defaultTheme, index, props }) => {
  const { carouselName, images } = props.fields;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselName}>{carouselName}</div>
      {images && (
        <Row>
          {images.map((image) => {
            return (
              <Col className={styles.imageColumn} xs={12} lg={4}>
                <ImageCardModule
                  props={{
                    alt: image.fields.title,
                    src: image.fields.file.url,
                    title: image.fields.title,
                  }}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default ImageCarouselModule;
