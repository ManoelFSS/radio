import React from "react";
import styles from "./Home.module.css"
import Som from "../../assets/fone.gif"
import { Alto_falante } from "../alto_falante/Alto_falante";
import AnimaSom from "../../assets/som02.jpg"
import Locutora from "../../assets/mulher.png"

export const Home = () => {
    return (
        <section className={styles.container}>
            <header>
                <h1>LIBERAL FM</h1>
            </header>
            <divc className={styles.left_area}>
                <Alto_falante  image={Som}/>
                <img className={styles.img} src={AnimaSom } alt="" />
                 <audio className={styles.player} controls autoPlay id="abc">
                    <source src={"https://stream-171.zeno.fm/u3xfwcfbt68uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ1M3hmd2NmYnQ2OHV2IiwiaG9zdCI6InN0cmVhbS0xNzEuemVuby5mbSIsImp0aSI6IjdyWGZtSHQ3VE1heGt6cHR4dHZvS0EiLCJpYXQiOjE3MTM5NzA1MjksImV4cCI6MTcxMzk3MDU4OX0.Rzhbjk6sjzBGULXSaf_FayfW95cER6giuKuMqz_Wav8&amp;zttl=5"} type="audio/mpeg" />
                </audio>
            </divc>
            <divc className={styles.rigth_area}>
               <img className={styles.locutora} src={Locutora} alt="" />
               <img className={styles.img} src={AnimaSom} alt="" />
            </divc>
        </section>
    )
}