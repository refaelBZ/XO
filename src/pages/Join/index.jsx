import React from 'react'
import styles from './style.module.scss';
import Button from '../../components/Button';
import WhiteBoard from '../../components/WhiteBoard';
import BtnBack from '../../components/BtnBack';
export default function Join() {
  return (
    <div className={styles.page}>

      <div className={styles.back}>
        <BtnBack />
      </div>
      <div className={styles.title}>
        Join a game
      </div>
      <WhiteBoard>
        <input type="text" placeholder='Enter code game' /></WhiteBoard>
      <Button content="Join" />
      <div className={styles.title}>
        -OR-
      </div>
      <Button content="Create a game" />

    </div>
  )
}
