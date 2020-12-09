import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { getContentFromEntry } from "../../../Network/contentful";

import styles from "./SplitCardModule.module.scss";

const SplitCardModule = ({ props }) => {
  const [splitCardData, setSplitCardData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentFromEntry(props.sys.id);
      if (data) {
        setSplitCardData(data);
      }
    };

    fetchData();
  }, []);

  console.log(splitCardData);

  return (
    <div>
      {splitCardData.fields && (
        <Card className={styles.cardContainer}>
          <Card.Body>
            <Row>
              <Col className={styles.imageContainer} xs={12} lg={6}>
                <img
                  className={styles.image}
                  src={splitCardData.fields.stepImage.fields.file.url}
                ></img>
              </Col>
              <Col className={styles.textContainer} xs={12} lg={6}>
                <h4>{splitCardData.fields.stepTitle}</h4>
                <div className={styles.description}>
                  {documentToReactComponents(
                    splitCardData.fields.stepDescription
                  )}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default SplitCardModule;
