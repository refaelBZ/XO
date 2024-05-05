import React from 'react';
import  styles from './style.module.scss';

function index({content="Play", onClick}) {
  return (
    <div onClick={onClick} >
      <button className={styles.play}>{content}</button>
    </div>
  );
}

export default index;
