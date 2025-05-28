import React from "react";
import styles from "./Outil.module.css";

export default function Outil() {
  return (
    <>
    <section className={styles.container}>
        <div className={styles.title}>
            <h2>L’arsenal 
                d’application qui fait 
                toute la <span>différence</span>.
            </h2>
            <p className="description">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
        </div>
            <div className={styles.technologies}>
                <div className={styles.allBox}>
                    <div className={styles.box}>
                        <i class="fa-brands fa-html5"></i>
                        <p>Javascript</p>
                    </div>
                    <div className={styles.box}>
                        <i class="fa-brands fa-html5"></i>
                        <p>Javascript</p>
                    </div>
                    <div className={styles.box}>
                        <i class="fa-brands fa-html5"></i>
                        <p>Javascript</p>
                    </div>
                </div>
            </div>
    </section>
    </>
  );
}
