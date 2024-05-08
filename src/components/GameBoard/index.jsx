import { useState } from "react";
import styles from "./style.module.scss";
import Blue_Square from "../Blue_square/index";
import WhiteBoard from "../WhiteBoard";

export default function Game_board() {
  const list = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const [board, setBoard] = useState(list);
  const [player, setPlayer] = useState("X");

  const handleClick = (rowIndex, squareIndex) => {
    const newBoard = [...board];
    if (board[rowIndex][squareIndex] !== " ") return null;
    newBoard[rowIndex][squareIndex] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
    // console.log(player);
  };
  // console.log(player);
  return (
    <div>
      <WhiteBoard>
        {board.map((r, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {r.map((s, squareIndex) => (
              <Blue_Square
                key={squareIndex}
                value={s}
                onClick={() => handleClick(rowIndex, squareIndex)}
              />
            ))}
          </div>
        ))}
      </WhiteBoard>
    </div>
  );
}
