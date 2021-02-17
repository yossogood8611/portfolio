import styles from './footer.module.css';
import React from "react";

function Footer() {
    function scrollWindow() {
        window.scrollTo(0,0,{behavior:'smooth'})
    }
    return (
        <div className={styles.footerBox}>
            <div className={styles.UpBox}>
                <div className={styles.tri}><div className={styles.toTopBtn} onClick={scrollWindow}></div></div>
            </div>
            <div className={styles.content}>Design by <a href="mailto:rooproop1111@naver.com"><div>&nbsp;Yujin</div></a></div>
        </div>
    )
}

export default Footer;