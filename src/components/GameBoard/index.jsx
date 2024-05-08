import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Blue_Square from '../Blue_square/index'
import WhiteBoard from '../WhiteBoard';
import { WiDirectionDown } from 'react-icons/wi';

export default function Game_board({ setWinner, winner }) {


    const isWin = (boardArr) => {
        const size = boardArr.length;

        // Rows
        for (let i = 0; i < size; i++) {
            const firstCell = boardArr[i][0];
            if (firstCell && boardArr[i].every(cell => cell === firstCell)) {
                return firstCell;
            }
        }

        // Columns
        for (let j = 0; j < size; j++) {
            const firstCell = boardArr[0][j];
            let allMatch = true;

            for (let k = 0; k < size; k++) {
                if (boardArr[k][j] !== firstCell) {
                    allMatch = false;
                    break;
                }
            }
            if (allMatch && firstCell) {
                return firstCell;
            }
        }

        // First Diagonal (top-left to bottom-right)
        const firstDiagonalCell = boardArr[0][0];
        let diagonalMatch = true;
        for (let i = 1; i < size; i++) {
            if (boardArr[i][i] !== firstDiagonalCell) {
                diagonalMatch = false;
                break;
            }
        }
        if (diagonalMatch && firstDiagonalCell) {
            return firstDiagonalCell;
        }

        // Second Diagonal (top-right to bottom-left)
        const firstReverseDiagonalCell = boardArr[0][size - 1];
        diagonalMatch = true;
        for (let i = 1; i < size; i++) {
            if (boardArr[i][size - 1 - i] !== firstReverseDiagonalCell) {
                diagonalMatch = false;
                break;
            }
        }
        if (diagonalMatch && firstReverseDiagonalCell) {
            return firstReverseDiagonalCell;
        }

        // No winner found
        return;
    };




    const list = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];

    const [board, setBoard] = useState(list)
    const [player, setPlayer] = useState("X")
    const [counter, setCounter] = useState(0);


    const handleClick = (rowIndex, squareIndex) => {
        if (board[rowIndex][squareIndex] !== " ") return; // אם המשחק נגמר או שהתא כבר נלחץ
        if (winner || counter == 9) return;

        const newBoard = [...board]
        newBoard[rowIndex][squareIndex] = player
        setBoard(newBoard)
        setPlayer(player === "X" ? "O" : "X")

        const win = isWin(newBoard) && false
        setWinner(win);
        if (!win) {
            console.log(win);
            setPlayer(player === "X" ? "O" : "X")
            setCounter(counter + 1)
        }

        console.log(winner);


    };
    return (
        <div >
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
