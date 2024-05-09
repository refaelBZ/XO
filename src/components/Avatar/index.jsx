import React from 'react';
import styles from './style.module.scss';
import X from '../X';
import O from '../O';

export default function Avatar({ sign, active, name }) {
  return (
    <div className={`${styles.avatar} ${active ? styles.CurrentAvatar : ''}`}>
      <div className={styles.pic}>
        {sign === 'X' ? <img src="/public/Girl avatar.png" /> : <img src="/public/Boy avatar.jpeg" />}
        <div className={styles.wins}>
          <div className={styles.cell}>
            {sign === 'X' ? <X /> : <O />}
          </div>
          Wins: 13
        </div>
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
