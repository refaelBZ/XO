import React from "react";
import Button from "../components/Button";
import styles from "./style.module.scss";
import Menu from "../pages/Menu";
import Join from "../pages/Join";
import Waiting from "../pages/Waiting";
import BoardWithPlayers from "../pages/BoardWithPlayers";
import ChoosePlayer from "../pages/ChoosePlayer";
import Welcome from "../pages/Welcome";

export default function Refael() {
  return (
    <div className={styles.dashboard}>
      <h2>Welcome to Refael's Component</h2>
      <Welcome/>
      <Menu />
      <Join />
      <Waiting />
      <BoardWithPlayers />
      <ChoosePlayer />{" "}
    </div>
  );
}
