import React from "react";
import { Card } from "react-bootstrap";

import SplitCardModule from "../SplitCardModule/SplitCardModule";

import styles from "./StepByStepCardModule.module.scss";

const StepByStepCardModule = ({ defaultTheme, index, props }) => {
  const { processName, steps } = props.fields;

  return (
    <Card
      className={styles.cardContainer}
      bg={defaultTheme ? "light" : "secondary"}
      text={defaultTheme ? "dark" : "light"}
    >
      <Card.Header className={styles.cardHeader}>{processName}</Card.Header>
      {steps &&
        steps.map((step) => {
          return <SplitCardModule props={step} />;
        })}
    </Card>
  );
};

export default StepByStepCardModule;
