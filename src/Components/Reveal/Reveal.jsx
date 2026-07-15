import React from "react";

import styles from "./Reveal.module.scss";

const Reveal = ({ children, animation = "fade-up", forever = false, className = "" }) => {
  const animationClass = {
    pulse: styles.pulse,
    "fade-up": styles.fadeUp,
    "slide-up": styles.slideUp,
  }[animation];

  return (
    <div
      className={`${styles.reveal} ${animationClass} ${forever ? styles.forever : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default Reveal;
