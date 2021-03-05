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

                </div>
            </div>
        </div>
    )
}

export default Contact;