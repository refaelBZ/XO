import React from "react";
import styles from "./style.module.scss";
import X from "../X";
import O from "../O";

export default function Avatar({ sign, active, name }) {
  return (
    <div className={`${styles.avatar} ${active ? styles.CurrentAvatar : ""}`}>
      <div className={styles.pic}>
        {sign === "girl" ? (
          <img src="/public/Girl avatar.png" />
        ) : (
          <img src="/public/Boy avatar.jpeg" />
        )}
        {active ? (
          <div className={styles.wins}>
            <div className={styles.cell}>{sign === "X" ? <X /> : <O />}</div>
            Wins: 13
          </div>
        ) : null}
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
