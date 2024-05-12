import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import LittleBtn from "../../components/LittleBtn";
import WhiteBoard from "../../components/WhiteBoard";
import Avatar from "../../components/Avatar";
import { useGameStore } from "../../store";

export default function ChoosePlayer() {
  const navigate = useNavigate();
  const setPlayerSymbols = useGameStore((state) => state.setPlayerSymbols);
  const setPlayerNames = useGameStore((state) => state.setPlayerNames); // שליפת פונקציית עדכון שמות מה-store
  const myName = useGameStore((state) => state.myName); // שליפת השם הנוכחי מה-store
  const opponentName = useGameStore((state) => state.opponentName);

  const [player, setPlayer] = useState("");

  const chooseClick = (value) => {
    setPlayer(value);
    setPlayerSymbols(value);
  };

  const handleNav = () => {
    if (player) {
      navigate("/board");
    }
  };

  const handleChange = (e) => {
    const newName = e.target.value;
    setPlayerNames(newName, opponentName);
  };

  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <img src="https://i.imgur.com/iYGPVCu.png" />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <WhiteBoard>
            <input
              type="text"
              placeholder="Enter your name"
              value={myName} // הצגת השם מה-store
              onChange={handleChange}
            />
          </WhiteBoard>
        </div>
      </div>{" "}
      <div className={styles.top}>
        <div className={styles.title}>CHOOSE AVATAR</div>
      </div>
      <div className={styles.avatars}>
        <Avatar sign="girl" />
        <Avatar />
        <Avatar sign="girl" />
      </div>
      <div className={styles.back}>
        <LittleBtn type="back" />
        <LittleBtn type="V" />
      </div>
      <div>{player && <Button content="LETS PLAY" onClick={handleNav} />}</div>
    </div>
  );
}
