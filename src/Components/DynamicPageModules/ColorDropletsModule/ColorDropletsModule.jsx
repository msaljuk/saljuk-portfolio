import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import styles from "./ColorDropletsModule.module.scss";

const ColorDropletsModule = ({ defaultTheme, index, props }) => {
  const { colors } = props.fields;

  const colorNames = Object.keys(colors);

  return (
    <div className={styles.colorsContainer}>
      <Card
        bg={defaultTheme ? "light" : "secondary"}
        text={defaultTheme ? "dark" : "light"}
      >
        <Card.Header className={styles.cardHeader}>Colors Used</Card.Header>
        <Card.Body className={styles.cardBody}>
          <Row className="justify-content-md-center">
            {colorNames &&
              colorNames.map((colorName) => {
                return (
                  <Col className={styles.dropletContainer} xs={"6"} md={"3"}>
                    <Fade bottom>
                      <div
                        className={styles.droplet}
                        style={{ backgroundColor: `#${colors[colorName]}` }}
                      ></div>
                    </Fade>

                    <div className={styles.colorDetails}>
                      <h5 className={styles.colorName}>{colorName}</h5>
                      <h6
                        className={styles.colorCode}
                      >{`#${colors[colorName]}`}</h6>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ColorDropletsModule;
