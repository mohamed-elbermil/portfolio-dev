import React, { useState, useEffect, useRef } from "react";
import styles from "./Profil.module.css";
import Cv from "../../assets/cv.png";

export default function Profil() {
  const [rotationX, setRotationX] = useState(-20);
  const ref = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;

      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      let progress = 1 - elementTop / windowHeight;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const startAngle = 20;
      const endAngle = 0; 

      const rotation = startAngle + (endAngle - startAngle) * progress;

      setRotationX(rotation);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.container}>
      <h2>
        Découvrez mon <span>parcours</span>
      </h2>
      <p>Obtenez un aperçu rapide de mon parcours et de mes compétences.</p>

      <div className={styles.perspectiveWrapper}>
        <div
          ref={ref}
          className={styles.cv}
          style={{
            transform: `rotateX(${rotationX}deg)`,
          }}
        >
          <img src={Cv} alt="Mon CV" />
        </div>
      </div>
    </section>
  );
}
