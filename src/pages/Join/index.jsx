// Join.js
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Button from '../../components/Button';
import WhiteBoard from '../../components/WhiteBoard';
import BtnBack from '../../components/BtnBack';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

export default function Join() {
  const [roomCode, setRoomCode] = useState('');
  const [joinStatus, setJoinStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // האזנה לתוצאות הצטרפות לחדר
    socket.on('join-status', (status) => {
      if (status.success) {
        setJoinStatus('Joined successfully');
        navigate('/choose'); // מסך לבחירת צורה או משחק
      } else {
        setJoinStatus('Failed to join. Please check the code.');
      }
    });

    return () => {
      socket.off('join-status');
    };
  }, [navigate]);

  // שליחת בקשה לשרת להצטרף לחדר
  const handleJoin = () => {
    socket.emit('join-game', { roomId: roomCode });
  };

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={styles.back}>
          <BtnBack />
        </div>
        <div className={styles.title}>Join a game</div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <WhiteBoard>
            <input
              type="text"
              placeholder="Enter game code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />
          </WhiteBoard>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button onClick={handleJoin} content="Join" />
        <div className={styles.title}>-OR-</div>
        <Button content="Create a game" />
      </div>
      {/* הצגת הודעת הצטרפות */}
      {joinStatus && <div className={styles.status}>{joinStatus}</div>}
    </div>
  );
}
