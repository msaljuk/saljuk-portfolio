import React from "react";
import { Card } from "react-bootstrap";

import styles from "./ImageCardModule.module.scss";

const ImageCardModule = ({ props }) => {
  const { alt, src, title } = props;

  return (
    <Card className={styles.imageCard}>
      <div className={styles.imageContainer}>
        <img alt={alt} className={styles.image} src={src} />
      </div>

      <Card.Header className={styles.cardHeader}>{title}</Card.Header>
    </Card>
  );
};

export default ImageCardModule;
