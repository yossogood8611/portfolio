import React from 'react';
import styles from './about.module.css';
import Profile from "../profile/profile";
import Mystory from "../myStory/mystory";
import ProgressBar from "../progressBar/progressBar";

function About() {
    return(
        <div className={styles.aboutBox}>
            <span className={styles.aboutTitle}>ABOUT</span>
            <div className={styles.aboutContent}>
                <div className={styles.aboutProfile}>
                    <Profile/>
                    <Mystory/>
                </div>
                <div className={styles.progressChart}>
                    <ProgressBar/>
                    <ProgressBar/>
                    <ProgressBar/>
                    <ProgressBar/>
                    <ProgressBar/>
                </div>
            </div>
        </div>
    )
}

export default About;