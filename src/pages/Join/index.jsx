import React from 'react'
import styles from './style.module.scss';
import Button from '../../components/Button';
import WhiteBoard from '../../components/WhiteBoard';
import BtnBack from '../../components/BtnBack';
import { useNavigate } from 'react-router-dom';

export default function Join() {



  const navigate = useNavigate();

  const handleNav = (e) => {
      navigate('/waiting');
  }


  return (
    <div className={styles.page}>

      <div className={styles.back}>
        <BtnBack />
      </div>
      <div className={styles.title}>
        Join a game
      </div>
      <WhiteBoard>
        <input type="text" placeholder='Enter code game' />
        </WhiteBoard>
        <div className={styles.buttons}>

      <Button content="Join" />
      <div className={styles.title}>
        -OR-
      </div>
      <Button onClick={handleNav} content="Create a game" />
        </div>

    </div>
  )
}
