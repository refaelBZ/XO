import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/menu');
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className={styles.page}>
    </div>
  );
}
