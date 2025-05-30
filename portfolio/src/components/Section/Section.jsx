import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Section.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Section({ children }) {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "bottom 50%", // fin plus haut = scroll plus court
          scrub: true,    // ← clé de l’effet progressif
          markers:true,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className={styles.section}>
      {children}
    </div>
  );
}
