import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import SplashImage from "../../Assets/images/splash.svg?react";
import LinksFooter from "../../Components/LinksFooter/LinksFooter";
import Reveal from "../../Components/Reveal/Reveal";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <Container>
      <div className={styles.container}>
        <Row>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <Reveal animation="pulse" forever>
              <SplashImage className={styles.splashImage} />
            </Reveal>
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <Reveal animation="slide-up">
              <div className={styles.landingTextContainer}>
                <h1 className={styles.headerText}>Hi! My name is Saljuk.</h1>
                <p>I like to design and code stuff.</p>
                <h6>
                  <Link to="/design">Design Portfolio</Link> |{" "}
                  <Link to="/code">Coding Portfolio</Link>
                </h6>
              </div>
            </Reveal>
          </Col>
        </Row>
        <LinksFooter />
      </div>
    </Container>
  );
};

export default Home;
