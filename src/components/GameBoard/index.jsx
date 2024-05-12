
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Blue_Square from "../Blue_square/index";
import WhiteBoard from "../WhiteBoard";
import { useGameStore } from '../../store';


export default function Game_board({ setWinner, winner }) {
  
  
  
  const list = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const [board, setBoard] = useState(list);
  const [player, setPlayer] = useState("X");
  const [counter, setCounter] = useState(0);
  const isFive = counter > 3
  const isFull = counter === 8


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




  const setWinnerName = useGameStore((state) => state.setWinnerName);
  const mySymbol = useGameStore((state) => state.mySymbol);
  const opponentSymbol = useGameStore((state) => state.opponentSymbol);
  const myName = useGameStore((state) => state.myName);
  const opponentName = useGameStore((state) => state.opponentName);
  const currentPlayer = useGameStore((state) => state.currentPlayer);

  // useEffect(() => {
  //   setPlayer(player);
  // }, [currentPlayer]);

  const handleClick = (rowIndex, squareIndex) => {
    if (winner) return;

    // if (winner || currentPlayer !== mySymbol) return;

    if (board[rowIndex][squareIndex] !== " ") return;


    const newBoard = [...board];
    newBoard[rowIndex][squareIndex] = player;
    setBoard(newBoard);
    const win = isFive ? isWin(newBoard, player) : false;
    setWinner(win);
    const winnerName = win === mySymbol ? myName : opponentName;
    setWinnerName(winnerName);


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





// import React, { useState } from "react";
// import styles from "./style.module.scss";
// import Blue_Square from "../Blue_square/index";
// import WhiteBoard from "../WhiteBoard";

// export default function Game_board({ setWinner, winner }) {
//   const initialBoard = [
//     [" ", " ", " "],
//     [" ", " ", " "],
//     [" ", " ", " "],
//   ];

//   const [board, setBoard] = useState(initialBoard);
//   const [player, setPlayer] = useState("X");
//   const [moves, setMoves] = useState(0);


//   const isWin = (boardArr, player) => {
//     const size = boardArr.length;

//     // Rows
//     for (let i = 0; i < size; i++) {
//       if (boardArr[i].every((square) => square === player)) {
//         return player;
//       }
//     }

//     // Columns
//     for (let j = 0; j < size; j++) {
//       let allMatch = true;
//       for (let k = 0; k < size; k++) {
//         if (boardArr[k][j] !== player) {
//           allMatch = false;
//           break;
//         }
//       }
//       if (allMatch) {
//         return player;
//       }
//     }

//     // Diagonal (top-left to bottom-right)
//     if (boardArr.every((row, index) => row[index] === player)) {
//       return player;
//     }

//     // Diagonal (top-right to bottom-left)
//     if (boardArr.every((row, index) => row[size - 1 - index] === player)) {
//       return player;
//     }

//     // No winner found
//     return null;
//   };

//   const handleClick = (rowIndex, squareIndex) => {
//     if (winner || board[rowIndex][squareIndex] !== " ") return;

//     const newBoard = board.map((row, rIdx) =>
//       row.map((square, sIdx) =>
//         rIdx === rowIndex && sIdx === squareIndex ? player : square
//       )
//     );

//     setBoard(newBoard);
//     const newMoves = moves + 1;
//     setMoves(newMoves);

//     const win = isWin(newBoard, player);

//     if (win) {
//       setWinner(win);
//     } else if (newMoves === 9) {
//       setWinner("Draw");
//     } else {
//       setPlayer(player === "X" ? "O" : "X");
//     }
//   };

//   return (
//     <div className={styles.squares}>
//       <WhiteBoard className={styles.test}>
//         {board.map((r, rowIndex) => (
//           <div key={rowIndex} className={styles.row}>
//             {r.map((s, squareIndex) => (
//               <Blue_Square
//                 key={squareIndex}
//                 value={s}
//                 onClick={() => handleClick(rowIndex, squareIndex)}
//               />
//             ))}
//           </div>
//         ))}
//       </WhiteBoard>
//     </div>
//   );
// }
