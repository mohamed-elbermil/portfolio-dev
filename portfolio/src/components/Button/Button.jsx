import React from "react"
import styles from "./Button.module.css"

export default function Button({content}) {
    
    return(
    <>
        <a href="#" className={styles.btnCta}>{content}</a>
    </>
    )
}