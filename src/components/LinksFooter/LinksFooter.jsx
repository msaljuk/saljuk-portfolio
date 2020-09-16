import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { getResume } from "../../network/contentful";

import email from "../../assets/images/email.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";

import styles from "./LinksFooter.module.scss";

const EMAIL = "msaljuk@stanford.edu";
const GITHUB_PROFILE = "https://github.com/msaljuk";
const LINKEDIN_PROFLE = "https://www.linkedin.com/in/saljuk-gondal-20310a176/";

const LinksFooter = () => {
  const [resumeFileLink, setResumeFileLink] = useState();
  const [resumeUpdated, setResumeUpdated] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resumeData = await getResume();
      if (resumeData) {
        setResumeFileLink(resumeData.fields.resumeFile.fields.file.url);
        setResumeUpdated(resumeData.fields.resumeFile.sys.updatedAt);
      }
    };

    fetchData();
  }, []);

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
              <a href={LINKEDIN_PROFLE}>
                <img
                  alt={"Linked In"}
                  className={styles.imageLink}
                  src={linkedin}
                ></img>
              </a>
            </Col>
            <Col className={styles.imageContainer} xs={2} md={4}>
              <a href={GITHUB_PROFILE}>
                <img
                  alt={"Github"}
                  className={styles.imageLink}
                  src={github}
                ></img>
              </a>
            </Col>
            <Col className={styles.imageContainer} xs={2} md={4}>
              <a href={`mailto: ${EMAIL}`}>
                <img
                  alt={"Email"}
                  className={styles.imageLink}
                  src={email}
                ></img>
              </a>
            </Col>
          </Row>
        </Col>

        <Col className={styles.textContainer} xs={"auto"}>
          <a href={resumeFileLink} target="window">
            Resume
          </a>
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
