import React from 'react';
import styles from './contact.module.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
    React.useEffect(()=> {
        Aos.init({});
    },[]);

    return(
        <div className={styles.contactBox} id='contact'>
            <div className={styles.tri}></div>
            <div data-aos="flip-right" data-aos-duration="1500">
                <div className={styles.contactTitle}>CONTACT</div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000">
                <div className={styles.contactItems}>
                    <a href="https://www.instagram.com/yu_jin_200"><div className={styles.contactInstar}></div></a>
                    <a href="https://github.com/yossogood8611"><div className={styles.contactGit}></div></a>
                    <a href="mailto:rooproop1111@naver.com"><div className={styles.contactMail}></div></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;