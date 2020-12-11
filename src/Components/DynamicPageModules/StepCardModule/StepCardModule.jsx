import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { getContentFromEntry } from "../../../Network/contentful";

import styles from "./StepCardModule.module.scss";

const StepCardModule = ({ defaultTheme, index, props, stepCardProps }) => {
  const [stepCardData, setStepCardData] = useState({});

  if (!defaultTheme) {
    defaultTheme = index % 2 === 0;
  }

  const bgTheme = stepCardProps ? stepCardProps.bgTheme : undefined;
  const bg = bgTheme ? bgTheme : defaultTheme ? "light" : "secondary";

  const textTheme = stepCardProps ? stepCardProps.textTheme : undefined;
  const text = textTheme ? textTheme : defaultTheme ? "dark" : "light";

  useEffect(() => {
    const fetchData = async () => {
      const stepID = stepCardProps.stepDetails.sys.id;

      const data = await getContentFromEntry(stepID);
      if (data) {
        setStepCardData(data);
      }
    };

    if (props === undefined) {
      fetchData();
    } else {
      setStepCardData(props);
    }
  }, [props, stepCardProps]);

  return (
    <div>
      {stepCardData.fields && (
        <Card className={styles.cardContainer} bg={bg} text={text}>
          <Card.Body>
            <Row>
              <Col
                className={styles.imageContainer}
                xs={12}
                lg={stepCardData.fields.imageGridSize}
              >
                <img
                  alt={`Step ${stepCardData.fields.stepTitle}`}
                  className={styles.image}
                  src={stepCardData.fields.stepImage.fields.file.url}
                ></img>
              </Col>
              <Col
                className={styles.textContainer}
                xs={12}
                lg={12 - stepCardData.fields.imageGridSize}
              >
                <h4>{stepCardData.fields.stepTitle}</h4>
                <div className={styles.description}>
                  {documentToReactComponents(
                    stepCardData.fields.stepDescription
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

export default StepCardModule;
