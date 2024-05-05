import React from "react";
import styles from "./style.module.scss";
import Menu from "../pages/Menu";
import Join from "../pages/Join";

export default function Refael() {
  return (
    <div className={styles.dashboard}>
      <h2>Welcome to Refael's Component</h2>
      <Menu />
      <Join />
    </div>
  );
}
