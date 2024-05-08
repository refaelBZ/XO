import React from "react";
import styles from "./style.module.scss";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import BtnBack from "../../components/BtnBack";
import WhiteBoard from "../../components/WhiteBoard";
import X from "../../components/X";
import O from "../../components/O";

export default function ChoosePlayer() {
  return (
    <div className={styles.page}>
      <div className={styles.back}>
        <BtnBack />
      </div>
      <div className={styles.title}>Choose player</div>
      <WhiteBoard>
        <div className={styles.choose}>
          <X />
          <O />
        </div>
      </WhiteBoard>
      <Button content="Join" />
      <div className={styles.title}>-OR-</div>
      <Button content="Create a game" />
    </div>
  );
}
