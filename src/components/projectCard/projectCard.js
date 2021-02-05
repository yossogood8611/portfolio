import React from 'react';
import styles from './projectCard.module.css';


function ProjectCard() {
    return(
        <div>
            <div className={styles.projectBox}>
                <div className={styles.projectContent}>
                    <div className={styles.projectText}>
                        <div className={styles.projectTitle}>GIVECOIN</div>
                        <div className={styles.projectUsed}>Design/Front-End</div>
                    </div>
                    <div className={styles.plus}></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;