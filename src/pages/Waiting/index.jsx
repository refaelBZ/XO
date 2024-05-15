// WaitingJoin.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import WhiteBoard from '../../components/WhiteBoard';
import BtnBack from '../../components/BtnBack';
import Loader from '../../components/Loader';
import styles from './style.module.scss';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

export default function Waiting() {
  const navigate = useNavigate();
  const location = useLocation();
  const [roomCode, setRoomCode] = useState(location.state?.roomCode || '');

  useEffect(() => {
    socket.on('game-start', (gameData) => {
      navigate('/game', { state: gameData });
    });

    return () => {
      socket.off('game-start');
    };
  }, [navigate]);

  return (
    <div className={styles.page}>
      <div className={styles.back}>
        <BtnBack />
      </div>
      <div className={styles.boardContainer}>
        <div className={styles.board}>
          <div className={styles.subtitle}>Your Code</div>
          <WhiteBoard>{roomCode}</WhiteBoard> 
        </div>
      </div>
      <div className={styles.loader}>
        <Loader height={60} width={60} />
      </div>
      <div className={styles.title}>Waiting for opponent</div>
    </div>
  );
}
