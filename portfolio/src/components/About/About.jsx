import React from "react";
import Button from "../../components/Button/Button";
import Profile from "../../assets/pp2.jpg";
import styles from "./About.module.css"


export default function About() {
    return(
        <>
         <section className={styles.aPropos}>
                <div className="text-left">
                  <h2>à propos</h2>
                  <p>
                    Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                    dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                    dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
                    dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLoremipsum
                    dolorLorem ipsum dolorLorem
                  </p>
                  <Button content="Voir +"></Button>
                </div>
                <div className="card">
                  <img src={Profile} alt="" />
                  <p>C'est moi :)</p>
                </div>
              </section>
        </>
    )
}