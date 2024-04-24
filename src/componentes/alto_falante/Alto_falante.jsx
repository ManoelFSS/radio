import React from "react";
import styles from "./Alto_falante.module.css"

export const Alto_falante = (props) =>{
   return (
    <>
        <div className={styles.container_autofalante}>
            <img src={props.image} alt="" />
        </div>
    </>
   )
}