import React from 'react'
import styles from './style.module.scss';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Menu() {




  const navigate = useNavigate();

  const handleNav = (e) => {
      navigate('/joingame');
  }


  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <img src="https://i.imgur.com/iYGPVCu.png" />
      </div>
      <div className={styles.buttons}>
        <Button onClick={handleNav} content="Play Solo"/>
        <Button content="Play with a friend"/>
      </div>

    </div>
  )
}
