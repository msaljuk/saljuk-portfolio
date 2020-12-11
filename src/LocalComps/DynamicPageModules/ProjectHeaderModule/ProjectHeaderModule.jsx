import React from "react";

import styles from "./ProjectHeaderModule.module.scss";

const ProjectHeaderModule = ({ defaultTheme, index, props }) => {
  const { projectSubtitle, projectTitle } = props.fields;

  return (
    <div className={styles.container}>
      <div className={styles.projectTitle}>{projectTitle}</div>
      <div className={styles.projectSubtitle}>{projectSubtitle}</div>
    </div>
  );
};

export default ProjectHeaderModule;
