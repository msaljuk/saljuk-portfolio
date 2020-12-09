import React from "react";
import { Spinner } from "react-bootstrap";

import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
