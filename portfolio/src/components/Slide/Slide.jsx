import React from "react";
import Soblim from "../../assets/soblim.png";
import FitnessArea from "../../assets/fitness-area.png";
import styles from "./Slide.module.css";

export default function Slide() {
  return (
    <>
      <div className={styles.projects}>
        <div className={styles.borderWrapper}>
          <div className={styles.details}>
            <p>SOBLIM</p>
            <span>2023</span>
          </div>
          <img src={Soblim} alt="" className={styles.website} />
        </div>
        <div className={styles.borderWrapper}>
          <div className={styles.details}>
            <p>Fitness-Area</p>
            <span>2023</span>
          </div>
          <img src={FitnessArea} alt="" className={styles.website} />
        </div>
      </div>
    </>
  );
}
