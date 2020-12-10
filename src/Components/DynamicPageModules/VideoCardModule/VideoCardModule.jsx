import React from "react";
import { Card } from "react-bootstrap";

import styles from "./VideoCardModule.module.scss";

const VideoCardModule = ({ defaultTheme, index, props }) => {
  const { video, videoTitle } = props.fields;

  console.log(video);

  return (
    <Card
      className={styles.cardContainer}
      bg={defaultTheme ? "light" : "secondary"}
      text={defaultTheme ? "dark" : "light"}
    >
      <Card.Header className={styles.cardHeader}>{videoTitle}</Card.Header>
      <Card.Body className={styles.cardBody}>
        <video width="100%" controls>
          <source
            src={video.fields.file.url}
            type={video.fields.file.contentType}
          ></source>
        </video>
      </Card.Body>
    </Card>
  );
};

export default VideoCardModule;
