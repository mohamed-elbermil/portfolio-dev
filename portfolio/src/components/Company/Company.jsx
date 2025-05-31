import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PenguinWorld1 from "../../assets/pw-1.jpg";
import PenguinWorld2 from "../../assets/pw-2.jpg";
import PenguinWorld3 from "../../assets/pw-3.jpg";
import styles from "./Company.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Company() {
  const horizontalSectionRef = useRef(null);
  const galeriesRef = useRef(null);
  const planeRef = useRef(null); // Ref pour l’avion

  useEffect(() => {
    const galeries = galeriesRef.current;
    const section = horizontalSectionRef.current;
    const plane = planeRef.current;

    const scrollLength = galeries.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      // Scroll horizontal des images
      gsap.to(galeries, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollLength / 3}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Animation avion : avancer + rotation sur tout le scroll
      gsap.to(plane, {
        x: scrollLength,
        rotation: 90,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollLength}`,
          scrub: 1,
        },
      });
    }, horizontalSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.page}>
      <div className={styles.horizontalScrollSection} ref={horizontalSectionRef}>
        <h2 className={styles.title}>L'<span>&lt;Entreprise /&gt;</span></h2>
        <p>Une ligne de code à la fois, chez &lt;Penguin World /&gt;</p>

        {/* Images scroll horizontal */}
        <div className={styles.galeries} ref={galeriesRef}>
          <img src={PenguinWorld1} alt="Penguin World 1" className={styles.PenguinWorld} />
          <img src={PenguinWorld2} alt="Penguin World 2" className={styles.PenguinWorld} />
          <img src={PenguinWorld3} alt="Penguin World 3" className={styles.PenguinWorld} />
        </div>

        {/* Picto avion */}
        <div className={styles.plane} ref={planeRef}>
          ✈️
        </div>
      </div>

      <div className={styles.sectionTitle}>
        <div className={styles.code}>
          <p>const <span>nomEntreprise</span> = 'Penguin World'</p>
          <p>const <span>secteur</span> = 'Voyage et transport'</p>
          <p>const <span>taille</span> = 'PME'</p>
          <p>const <span>objectifs</span> = 'lalalalalal'</p>
        </div>
      </div>
    </section>
  );
}
