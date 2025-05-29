import React from 'react';
import styles from './Title.module.css';


export default function Title({ title, text }){
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
};

