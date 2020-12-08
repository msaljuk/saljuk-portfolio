import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router";

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
      bg="light"
      variant="primary"
    >
      <Navbar.Brand className={styles.brand} href="/">
        saljuk
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" variant="primary">
          <Nav.Link href="/design">Design Portfolio</Nav.Link>
          <Nav.Link href="/code">Coding Portfolio</Nav.Link>
          <Nav.Link href="/moreaboutme">More About Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;