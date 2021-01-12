// Libraries import
import React from "react";
// Other imports
import styles from "./Container.module.css";

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
