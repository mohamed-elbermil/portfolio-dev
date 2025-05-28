import React from "react";
import styles from "./Profil.module.css";
import Cv from "../../assets/cv.png"

export default function Profil() {
  return (
    <>
      <section className={styles.container}>
        <h2>Découvrez mon <span>parcours</span></h2>
        <p>Obtenez un aperçu rapide de mon parcours et de mes compétences.</p>
        <div className={styles.cv}>
            <img src={Cv} alt="" />
        </div>
      </section>
    </>
  );
}
