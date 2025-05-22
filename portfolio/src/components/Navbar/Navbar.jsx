import React from "react";
import styles from "./Navbar.module.css"

export default function Navbar() {
    return(
        <>
        <nav>
            <ul>
                <a href="#" className={styles.round}>
                    <i class="fa-solid fa-house"></i>
                </a>

                <li><a href="#">Home</a></li>
                <li><a href="#">Projets</a></li>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        </>
    )
}