import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>

          <a href="#" className={styles.round}>
            <i class="fa-solid fa-house"></i>
          </a>
          </li>

          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#company">Entreprise</a>
          </li>
          <li>
            <a href="#mission">Mission</a>
          </li>
          <li>
            <a href="#veille">Veille</a>
          </li>
          <li>
            <a href="#parcours">CV</a>
          </li>
          <li>
            <a href="">Projets</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
