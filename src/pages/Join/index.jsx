import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Button from "../../components/Button";
import WhiteBoard from "../../components/WhiteBoard";
import LittleBtn from "../../components/LittleBtn";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000"); // כתובת השרת שלך

export default function Join() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleNav = (e) => {
    navigate("/waiting");
  };

  useEffect(() => {
    socket.on("awaiting", (code) => {
      navigate("/waiting", { state: { roomCode: code } }); // שולח את קוד החדר למסך ההמתנה
    });
  }, [navigate]);

  const handleJoin = () => {
    socket.emit("join-game", { roomId: roomCode });
    console.log(roomCode);
  };

  const handleCreate = () => {
    socket.emit("game-create");
  };

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={styles.back}>
          <LittleBtn />
        </div>
        <div className={styles.title}>Join a game</div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <WhiteBoard>
            <input
            <input
              type="text"
              id="numberInput"
              maxLength="6"
              placeholder="Enter game code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />{" "}
          </WhiteBoard>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button onClick={handleJoin} content="Join" />
        <div className={styles.title}>-OR-</div>
        <Button onClick={handleCreate} content="Create a game" />
      </div>
    </div>
  );
}
