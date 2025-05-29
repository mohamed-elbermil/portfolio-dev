import React from 'react';
import styles from './Company.module.css';
import Title from '../Title/Title';
import PenguinWorld from "../../assets/pw.jpg"


export default function Company({ title, text }){
  return (
    <>
    <section>
        <Title
        title={
        <>
            Une ligne de code à la fois,<br></br> chez <span>&lt;Penguin World /&gt;</span>
        </>
        }
        text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."
        />
        <div className={styles.presentation}>
            <img src={PenguinWorld} alt="" className={styles.PenguinWorld} />
            <div className={styles.code}>
                <div className={styles.line}>
                    <p>const <span className={styles.variable}>nomEntreprise</span> = <span className={styles.value}>'Penguin World'</span></p>
                </div>
                <div className={styles.line}>
                    <p>const <span className={styles.variable}>secteur</span> = <span className={styles.value}>'Voyage et transport'</span></p>
                </div>
                <div className={styles.line}>
                    <p>const <span className={styles.variable}>taille</span> = <span className={styles.value}> 'PME'</span></p>
                </div>
                <div className={styles.line}>
                    <p>const <span className={styles.variable}>objectifs</span> = <span className={styles.value}>'lalalalalal'</span></p>
                </div>
            </div>
        </div>

        <Title
        title={
            <>
            Le contexte de 
                l’<span> &lt;Alternance /&gt;</span>
            </>
        }
        text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."
        >
        </Title>
        <ul>
            <li>
                <span>Mon rôle :</span> Intégrateur Web
            </li>
            <li>
                <span>Rythme d'alternance :</span> 2 jours d’école et 3 jours entreprises
            </li>
        </ul>
    </section>
    </>
  );
};

