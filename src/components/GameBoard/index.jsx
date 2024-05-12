
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Blue_Square from "../Blue_square/index";
import WhiteBoard from "../WhiteBoard";
import { useGameStore } from '../../store';
import isWin from '../../functions/isWin'

export default function Game_board() {

  const winner = useGameStore((state) => state.winner)
  const setWinner = useGameStore((state) => state.setWinner)
  const setWinnerName = useGameStore((state) => state.setWinnerName);
  const mySymbol = useGameStore((state) => state.mySymbol);
  const opponentSymbol = useGameStore((state) => state.opponentSymbol);
  const myName = useGameStore((state) => state.myName);
  const opponentName = useGameStore((state) => state.opponentName);
  const currentPlayer = useGameStore((state) => state.currentPlayer);
  const togglePlayer = useGameStore((state) => state.togglePlayer);
  const board = useGameStore((state) => state.board);
  const setBoard = useGameStore((state) => state.setBoard);



  const [counter, setCounter] = useState(0);
  const isFive = counter > 3
  const isFull = counter === 8




  const handleClick = (rowIndex, squareIndex) => {
    
    if(isCompu){
      isWin
      
    }

    if (winner) return;


    if (board[rowIndex][squareIndex] !== " ") return;


    const newBoard = [...board];
    newBoard[rowIndex][squareIndex] = currentPlayer;
    setBoard(newBoard);
    const win = isFive ? isWin(newBoard, currentPlayer) : false;
    setWinner(win);
    const winnerName = win === mySymbol ? myName : opponentName;
    setWinnerName(winnerName);


    if (isFull && !win) setWinner("ldraw")
    if (!win) {
      togglePlayer()
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
