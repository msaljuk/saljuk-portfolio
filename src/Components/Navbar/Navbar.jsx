import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.scss";

const CustomNavbar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <Navbar
      className={styles.navbar}
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
    >
      <Navbar.Brand as={Link} className={styles.brand} to="/">
        saljuk
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/design">
            Design Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/code">
            Coding Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/moreaboutme">
            More About Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
