import React from "react";
import styles from "./Load.module.css"
import Load_image from "../../assets/logo01.gif"

export const Load = () => {
    return (
        <section className={styles.container_load}>
            <div className={styles.icone_load }>
                <img src={Load_image} alt="" />
            </div>
            <p>
                <span></span>
                <span></span>
                <span></span>
            </p>
        </section>
    )
}