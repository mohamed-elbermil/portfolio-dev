import React from "react";
import Profil from "../../assets/pp.png"
import styles from "./Header.module.css"
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button"

export default function Header() {
    return(
        <>
        <Navbar></Navbar>
        <header>

            <div className={styles.status}>
                <div className={styles.alert}>
                    <div className={styles.round}></div>
                    <div className={styles.roundAlert}></div>
                </div>
                <p>Disponible pour une opportunité</p>
            </div>
            <img src={Profil} alt="" />
            <div className={styles.profile}>
                <p>Hey, I’m Mohamed EL BERMIL Web Developer</p>
                <span>France, Lyon</span>
                <span>France, LyonFrance, LyonFrance, LyonFrance, LyonFrance, LyonFrance, LyonFrance, LyonFrance, LyonFrance, LyonFrance, Lyon</span>
                    <Button content="Me contacter"></Button>
                
            </div>
            <div className={styles.socialMedia}>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </header>
        </>
    )
}