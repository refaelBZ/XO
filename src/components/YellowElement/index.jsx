import React from 'react'
import styles from './style.module.scss'

export default function YellowElement({winner=""}) {
  return (
    <div className={styles.container}>
      <div className={styles.element}>
      <div className={styles.title}>
      {winner ? `${winner}` : ""}
      </div>
      </div>
    </div>
  )
}