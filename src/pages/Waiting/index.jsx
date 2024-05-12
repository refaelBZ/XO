import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Button from "../../components/Button";
import WhiteBoard from "../../components/WhiteBoard";
import BtnBack from "../../components/BtnBack";
import Loader from "../../components/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { useStore } from "zustand";

// יצירת חיבור באמצעות `io` עם כתובת השרת שלך
const socket = io("http://localhost:4000");

export default function Waiting() {
  const navigate = useNavigate();
  const location = useLocation(); // קבלת ה-state מהניווט
  const [roomCode, setRoomCode] = useState(location.state?.roomCode || "");
  // const { roomCode, setRoomCode } = useStore();

  useEffect(() => {
    // האזנה לאירוע של התחלת המשחק
    socket.on("game-start", (gameData) => {
      navigate("/game", { state: gameData }); // נווט למסך המשחק עם נתוני המשחק
    });

    // ניקוי האזנה לאירוע בעת יציאה מהמסך
    return () => {
      socket.off("game-start");
    };
  }, [navigate]);

  return (
    <div className={styles.page}>
      <div className={styles.back}>
        <LittleBtn />
      </div>
      <div className={styles.boardContainer}>
        <div className={styles.board}>
          <div className={styles.subtitle}>Your Code</div>
          <WhiteBoard>{roomCode}</WhiteBoard>
        </div>
      </div>
      <div className={styles.loader}>
        <Loader height={60} width={60} />
      </div>
      <div>
        <div className={styles.title}>waiting for opponent</div>
      </div>
    </div>
  );
}
