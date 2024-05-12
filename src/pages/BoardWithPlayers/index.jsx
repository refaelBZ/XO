import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../../components/Button";
import YellowElement from "../../components/YellowElement";
import GameBoard from "../../components/GameBoard";
import Avatar from "../../components/Avatar";
import { useGameStore } from '../../store';

export default function BoardWithPlayers() {

  const winner = useGameStore((state) => state.winner);
  const setWinner = useGameStore((state) => state.setWinner);
  const mySign = useGameStore((state) => state.mySymbol);
  const opponentSign = useGameStore((state) => state.opponentSymbol);
  const currentPlayer = useGameStore((state) => state.currentPlayer);
  const winnerName = useGameStore((state) => state.winnerName);
  const myName = useGameStore((state) => state.myName);
  const opponentName = useGameStore((state) => state.opponentName);


  return (
    <div className={styles.page}>
      <div className={styles.yellowElement}>
        <YellowElement {...(winner && { winner: winnerName })} />
        {!winner && (
          <div className={styles.avatarContainer}>
            <Avatar sign={mySign} active={currentPlayer === mySign} name={myName} />
            <Avatar sign={opponentSign} active={currentPlayer === opponentSign} name={opponentName} />
          </div>
        )}
      </div>

      <div className={styles.board}>
        <GameBoard />
      </div>

      <div className={styles.buttons}>
        <Button content="Back" onClick={() => { }} />
      </div>


    </div>
  );
}