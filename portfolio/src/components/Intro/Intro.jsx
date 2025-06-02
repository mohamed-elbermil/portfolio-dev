import React from "react";
import Title from "../Title/Title";
import { section } from "framer-motion/client";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <>
      <section className={styles.context}>
        <Title
          theme="Contexte"
          title={
            <>
              Le contexte de l'{" "}
              <span className="span">&lt;Alternance /&gt;</span>
            </>
          }
          text="Penguin World, engagé dans la promotion de voyages inspirant, rassemble une équipe passionnés pour rapprocher les peuples. Ils m'ont fait appel en tant qu'intégrateur web pour renforcer l'expérience utilisateur de leurs différentes plateformes."
        />
        <br></br>
        <ul className={styles.list}>
          <li>
            <span className="primary">
              <i class="fa-solid fa-person"></i>
            </span>{" "}
            Intégrateur Web
          </li>
          <li>
            <span className="primary">
              <i class="fa-solid fa-clock"></i>
            </span>{" "}
            2 jours d’école et 3 jours entreprises
          </li>

          <li>
            <span className="primary">
              <i class="fa-solid fa-briefcase"></i>
            </span>{" "}
            Alternance
          </li>
        </ul>
      </section>
    </>
  );
}
