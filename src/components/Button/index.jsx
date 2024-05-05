import React from 'react';
import  styles from './style.module.scss';

function Button({content="Play", onClick}) {
  return (
    <div onClick={onClick} >
      <button className={styles.play}>{content}</button>
      <div className={styles.gradient} /> {/* בלי הסימן ; */}

      
    </div>
  );
}

export default Button;

