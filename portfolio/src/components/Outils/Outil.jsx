import React from "react";
import styles from "./Outil.module.css";
import Title from "../Title/Title";

export default function Outil() {
  return (
    <>
    <section className={styles.container}>
        <div className={styles.title}>
             <Title
                        theme="Outils"
                        title={
                        <>
                            L’arsenal 
                            d’application qui fait 
                            toute la <span>&lt;différence /&gt;</span>
                        </>
                        }
                        text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."
                        />
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
