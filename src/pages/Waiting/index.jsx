import React from "react";
import styles from "./style.module.scss";
import Button from "../../components/Button";
import WhiteBoard from "../../components/WhiteBoard";
import BtnBack from "../../components/BtnBack";
export default function Waiting() {
  return (
    <div className={styles.page}>
      <div className={styles.back}>
        <BtnBack />
      </div>
      <div className={styles.board}>
        <div className={styles.codeTitle}>Your Code</div>
        <WhiteBoard>0548104804 </WhiteBoard>
      </div>
      <div className={styles.title}>waiting for opponent </div>
    </div>
  );
}
