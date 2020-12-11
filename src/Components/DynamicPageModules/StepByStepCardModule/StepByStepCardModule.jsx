import React from "react";
import { Card } from "react-bootstrap";

import StepCardModule from "../StepCardModule/StepCardModule";

import styles from "./StepByStepCardModule.module.scss";

const StepByStepCardModule = ({ defaultTheme, index, props }) => {
  const { bgTheme, processName, steps, textTheme } = props.fields;

  const bg = bgTheme ? bgTheme : defaultTheme ? "light" : "secondary";
  const text = textTheme ? textTheme : defaultTheme ? "dark" : "light";

  return (
    <Card className={styles.cardContainer} bg={bg} text={text}>
      <Card.Header className={styles.cardHeader}>{processName}</Card.Header>
      {steps &&
        steps.map((step) => {
          return (
            <StepCardModule
              stepCardProps={{
                bgTheme: bg,
                stepDetails: step,
                textTheme: text,
              }}
            />
          );
        })}
    </Card>
  );
};

export default StepByStepCardModule;
