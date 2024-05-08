import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Blue_Square from "../Blue_square/index";
import WhiteBoard from "../WhiteBoard";

export default function Game_board({ setWinner, winner }) {
  const list = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const [board, setBoard] = useState(list);
  const [player, setPlayer] = useState("X");
  const [counter, setCounter] = useState(0);
  const isFive  = counter > 3
  const isFull  = counter === 8


  // פונקציית בדיקת ניצחון 
  const isWin = (boardArr, player) => {
    const size = boardArr.length;

    // Rows
    for (let i = 0; i < size; i++) {
      let allMatch = true;
      for (let j = 0; j < size; j++) {
        if (player && boardArr[j][i] !== player) {
          allMatch = false;
          break;
        }
      }
      if (allMatch && player) {
        console.log("Row Winner", player);
        return player;
      }
    }

    // Columns
    for (let j = 0; j < size; j++) {
      let allMatch = true;

      for (let k = 0; k < size; k++) {
        if (boardArr[j][k] !== player) {
          allMatch = false;
          break;
        }
      }
      if (allMatch && player) {
        console.log("Col Winner", player);
        return player;
      }
    }

    // First Diagonal (top-left to bottom-right)
    let diagonalMatch = true;
    for (let i = 0; i < size; i++) {
      if (boardArr[i][i] !== player) {
        diagonalMatch = false;
        break;
      }
    }
    if (diagonalMatch && player) {
      console.log("First DIag Winner", player);
      return player;
    }

    // Second Diagonal (top-right to bottom-left)
    diagonalMatch = true;
    for (let i = 0; i < size; i++) {
      if (boardArr[i][size - 1 - i] !== player) {
        diagonalMatch = false;
        break;
      }
    }
    if (diagonalMatch && player) {
      console.log("Second Diag Winner", player);
      return player;
    }

    // No winner found
    return;
  };

  const handleClick = (rowIndex, squareIndex) => {
    if (winner) return;
    if (board[rowIndex][squareIndex] !== " ") return;
    
    
    const newBoard = [...board];
    newBoard[rowIndex][squareIndex] = player;
    setBoard(newBoard);
    const win = isFive ?  isWin(newBoard, player) : false;
    setWinner(win);
    if (isFull && !win) setWinner("l")  
    if (!win) {
      setPlayer(player === "X" ? "O" : "X");
      setCounter(counter + 1);
    }
    console.log(win);
  };




  return (
    <div className={styles.squares}>
      <WhiteBoard className={styles.test}>
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
