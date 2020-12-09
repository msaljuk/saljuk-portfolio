import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { getContentFromEntry } from "../../../Network/contentful";

import styles from "./ImageCarouselModule.module.scss";

const ImageCarouselModule = ({ defaultTheme, index, props }) => {
  const [imageData, setImageData] = useState([]);

  const { images } = props.fields;

  useEffect(() => {
    const fetches = [];

    const fetchData = async (id) => {
      const data = await getContentFromEntry(id);
      if (data) {
        return data;
      }
    };

    for (let i = 0; i < images.length; i++) {
      fetches.push(fetchData(images[i].sys.id));
    }

    Promise.all(fetches)
      .then((values) => setImageData(values))
      .catch((err) => console.log(err));
  }, [images]);

  console.log(imageData);

  return (
    <div className={styles.carouselContainer}>
      {imageData.length > 0 ? (
        <Row>
          {imageData.map((image) => {
            return (
              <Col xs={12} lg={4}>
                <Card className={styles.imageCard}>
                  <div className={styles.imageContainer}>
                    <img
                      alt={"Carousel Portfolio"}
                      className={styles.image}
                      src={image.fields.image.fields.file.url}
                    />
                  </div>

                  <Card.Header className={styles.cardHeader}>
                    {image.fields.imageTitle}
                  </Card.Header>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : null}
    </div>
  );
};

export default ImageCarouselModule;
