import React from 'react';
import styles from './about.module.css';
import Profile from "../profile/profile";
import Mystory from "../myStory/mystory";
import ProgressBar from "../progressBar/progressBar";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
    React.useEffect(()=> {
        Aos.init({});
    },[]);

    return(
        <div className={styles.aboutBox}>
            <div data-aos="flip-right" data-aos-duration="1500">
                <span className={styles.aboutTitle}>ABOUT</span>
            </div>
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