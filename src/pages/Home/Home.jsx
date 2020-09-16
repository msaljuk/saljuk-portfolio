import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pulse from "react-reveal/Pulse";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

import { ReactComponent as SplashImage } from "../../assets/images/splash.svg";
import LinksFooter from "../../components/LinksFooter/LinksFooter";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <Container>
      <div className={styles.container}>
        <Row>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <Pulse forever>
              <SplashImage className={styles.splashImage}></SplashImage>
            </Pulse>
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <Slide bottom>
              <div className={styles.landingTextContainer}>
                <h1 className={styles.headerText}>Hi! My name is Saljuk.</h1>
                <p>I like to design and code stuff.</p>
                <h6>
                  <Link to="/design">Design Portfolio</Link> |{" "}
                  <Link to="/code">Coding Portfolio</Link>
                </h6>
              </div>
            </Slide>
          </Col>
        </Row>
        <LinksFooter />
      </div>
    </Container>
  );
};

export default Home;
