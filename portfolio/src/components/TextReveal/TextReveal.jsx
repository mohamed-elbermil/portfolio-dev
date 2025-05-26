import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TextReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const letters = paragraphRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.03,
          from: "start",
        },
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top bottom",
          end: "bottom top",
          markers: true,
          scrub: true, // <-- synchronise avec le scroll
        },
      }
    );
  }, []);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dicta error provident, ab earum nemo maiores optio reiciendis inventore sequi officiis vel qui laborum asperiores expedita officia quis non recusandae dolores nihil cupiditate obcaecati enim placeat quae. Fugiat voluptatem, sit voluptatibus iusto deleniti, vitae minima quas consequatur odio, inventore veritatis?";

  return (
    <p className={styles.paragraph} ref={paragraphRef}>
      {text.split("").map((char, i) => (
        <span key={i} className={styles.letter}>
          {char}
        </span>
      ))}
    </p>
  );
}
