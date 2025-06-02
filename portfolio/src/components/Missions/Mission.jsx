import React from "react";
import Title from "../Title/Title";
import styles from "./Mission.module.css";
import Card from "../Card/Card";

export default function Mission() {
  return (
    <>
      <section className={styles.context}>
        <Title
          theme="Missions"
          title={
            <>
              Mes missions, mes actions, mes{" "}
              <span className="span">&lt;résultats /&gt;</span>
            </>
          }
        />
        <br></br>
        <div className={styles.allCard}>
          <Card
            icon={
              <>
                <i class="fa-solid fa-bookmark"></i>{" "}
              </>
            }
            title="Création de marque blanche"
            description="tesregegergerrgegregregergegregergt"
          />
          <Card
            icon={
              <>
                <i class="fa-solid fa-pen-to-square"></i>
              </>
            }
            title="Création de Design System"
            description="tesregegergerrgegregregergegregergt"
          />
          <Card
            icon={
              <>
                <i class="fa-solid fa-wheelchair"></i>
              </>
            }
            title="Normes d'accessibilité numérique (RGAA)"
            description="Conformité aux standards d’accessibilité pour garantir une expérience inclusive à tous les utilisateurs."
          />
          <Card
            icon={
              <>
                <i class="fa-solid fa-chart-line"></i>
              </>
            }
            title="Optimisation des performances"
            description="tesregegergerrgegregregergegregergt"
          />
          <Card
            icon={
              <>
                <i class="fa-solid fa-briefcase"></i>
              </>
            }
            title="Création de marque blanche"
            description="tesregegergerrgegregregergegregergt"
          />
        </div>
      </section>
    </>
  );
}
