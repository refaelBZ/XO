import React from 'react'
import styles from './style.module.scss'
import X from '../X'
export default function Avatar() {
  return (
    <div className={styles.avatar}>
      <div className={styles.pic}>
        <div className={styles.wins}>
          <div className={styles.cell}>
            <X />
          </div>
          Wins: 13</div>
      </div>
      <div className={styles.name}>Moshe</div>
    </div>
  )
}
