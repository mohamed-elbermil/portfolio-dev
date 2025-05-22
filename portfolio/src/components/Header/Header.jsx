import React from "react";
import Profil from "../../assets/pp.png"
import styles from "./Header.module.css"

export default function Header() {
    return(
        <>
        <div className={styles.status}>
            <div className={styles.round}></div>
            <p>Disponible pour une opportunité</p>
        </div>
        <img src={Profil} alt="" />
        <div className={styles.profile}>
            <p>Mohamed EL BERMIL</p>
            <span>Développeur Web</span>
            <span>France, Lyon</span>
        </div>
        <div className={styles.socialMedia}>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
        </>
    )
}