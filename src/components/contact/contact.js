import React from 'react';
import styles from './contact.module.css';

function Contact() {
    return(
        <div className={styles.contactBox}>
            <div className={styles.tri}></div>
            <div className={styles.contactTitle}>CONTACT</div>
            <div className={styles.contactItems}>
                <div className={styles.contactInstar}></div>
                <div className={styles.contactGit}></div>
                <div className={styles.contactMail}></div>
            </div>
        </div>
    )
}

export default Contact;