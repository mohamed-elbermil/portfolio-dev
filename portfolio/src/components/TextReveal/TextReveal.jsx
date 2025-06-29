import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TextReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ text }) {
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (!paragraphRef.current) return;

    const letters = paragraphRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      }
    );
  }, [text]);  // on déclenche l’effet quand le texte change

  if (!text) {
    // optionnel, tu peux gérer le cas où pas de texte passé
    return null;
  }

  return (
    <section className={styles.wrapper} ref={paragraphRef}>
      <p className={styles.paragraph}>
        {text.split("").map((char, i) => (
          <span key={i} className={styles.letter}>
            {char}
          </span>
        ))}
      </p>
    </section>
  );
}
