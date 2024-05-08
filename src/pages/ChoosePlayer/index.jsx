import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import BtnBack from "../../components/BtnBack";
import WhiteBoard from "../../components/WhiteBoard";
import X from "../../components/X";
import O from "../../components/O";
import Blue_Square from "../../components/Blue_square";
import { Value } from "sass";

export default function ChoosePlayer() {
  const navigate = useNavigate();

  const handleNav = (e) => {
    navigate("/board");
  };
  const [player, setPlayer] = useState("");
  const chooseClick = (value) => {
    setPlayer(value);
  };
  return (
    <div className={styles.page}>
      <div className={styles.back}>
        <BtnBack />
      </div>
      <div className={styles.title}>Choose player</div>
      <WhiteBoard>
        <div className={styles.choose}>
          <div className={` ${player === "O" ? styles.gray : styles.choose}`}>
            <Blue_Square
              value="X"
              onClick={() => chooseClick("X")}
            ></Blue_Square>
          </div>
          <div className={` ${player === "X" ? styles.gray : styles.choose}`}>
            <Blue_Square
              value="O"
              onClick={() => chooseClick("O")}
            ></Blue_Square>
          </div>
        </div>
      </WhiteBoard>
      <WhiteBoard>
        <input type="text" placeholder="Choose your name" />
      </WhiteBoard>
      {player ? <Button content="LETS PLAY" onClick={handleNav} /> : null}
    </div>
  );
}
