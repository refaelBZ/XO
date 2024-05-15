// Menu.js
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

export default function Menu() {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');

  useEffect(() => {
    // האזנה לאירוע `awaiting` לקבלת קוד החדר מהשרת
    socket.on('awaiting', (code) => {
      setRoomCode(code);
      console.log(code);
      navigate('/waiting', { state: { roomCode: code } }); // העבר את הקוד ל-WaitingJoin
    });

    return () => {
      socket.off('awaiting');
    };
  }, [navigate]);

  // בקשת יצירת חדר חדש מהשרת
  const handleCreateRoom = () => {
    socket.emit('game-create'); // בקש קוד חדר מהשרת
  };

  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <img src="https://i.imgur.com/iYGPVCu.png" />
      </div>
      <div className={styles.buttons}>
        <Button content="Play Solo" />
        <Button onClick={handleCreateRoom} content="Play with a Friend" />
      </div>
    </div>
  );
}
