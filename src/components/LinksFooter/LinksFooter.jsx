import classnames from "classnames";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import email from "../../assets/images/email.png";
import github from "../../assets/images/github.png";
import linkedIn from "../../assets/images/linkedIn.png";

import styles from "./LinksFooter.module.scss";

const LinksFooter = () => {
  const [resumeUpdated, setResumeUpdated] = useState();

  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className={styles.container}>
      <Row>
        <Col className={styles.imageLinks} xs={12} md={"auto"}>
          <Row>
            <Col className={styles.imageContainer} xs={2} md={4}>
              <img className={styles.imageLink} src={linkedIn}></img>
            </Col>
            <Col className={styles.imageContainer} xs={2} md={4}>
              <img className={styles.imageLink} src={github}></img>
            </Col>
            <Col className={styles.imageContainer} xs={2} md={4}>
              <img className={styles.imageLink} src={email}></img>
            </Col>
          </Row>
        </Col>

        <Col className={styles.textContainer} xs={"auto"}>
          <a href="./">Resume</a>
          <div className={styles.resumeUpdated}>
            <span className={styles.lastUpdated}>Last Updated: </span>
            {resumeUpdated &&
              new Date(resumeUpdated).toLocaleString("en-EN", dateOptions)}
          </div>
        </Col>
        <Col
          className={classnames(styles.textContainer, styles.moreAboutMe)}
          xs={"auto"}
        >
          <a href="./">More About Me</a>
        </Col>
      </Row>
    </div>
  );
};

export default LinksFooter;
