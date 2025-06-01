import React from 'react';
import Title from '../Title/Title';
import styles from "./Card.module.css"

export default function Card({icon,title,description}) {
  return (
    <>
    <div className={styles.card}>
        <span>{icon}</span>
        <p>{title}</p>
        <p className={styles.description}>{description}</p>
    </div>
    </>
  );
}


