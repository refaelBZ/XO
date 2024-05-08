import React, { useState } from 'react'
import styles from './style.module.scss';
import Button from '../../components/Button';
import WhiteBoard from '../../components/WhiteBoard';
import BtnBack from '../../components/BtnBack';
import YellowElement from '../../components/YellowElement';
import Game_board from '../../components/GameBoard';
export default function BoardWithPlayers() {


    const [winner, setWinner] = useState(null);

    return (
        <div className={styles.page}>


            <div className={styles.yellowElement}>
                <YellowElement winner={winner} />
            </div>
            <div className={styles.board}>
                <Game_board setWinner={setWinner} winner={winner} />

            </div>            <Button content="Back" />

        </div>
    )
}
