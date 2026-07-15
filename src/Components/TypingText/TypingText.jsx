import React from "react";

import styles from "./TypingText.module.scss";

const TypingText = ({ children, className = "", speed = 500 }) => {
  const text = typeof children === "string" ? children : "";
  const durationMs = Math.max(text.length, 1) * speed;

  return (
    <div
      className={`${styles.typing} ${className}`.trim()}
      style={{
        animationDuration: `${durationMs}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default TypingText;
