import React from 'react'
import styles from './style.module.scss';
import Button from '../../components/Button';
export default function Menu() {
  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <img src="https://i.imgur.com/iYGPVCu.png" />
      </div>
        <Button content="Play Solo"/>
        <Button content="Play with a friend"/>

    </div>
  )
}
