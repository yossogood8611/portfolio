import React from 'react';
import styles from './portfolio.module.css';
import ProjectCard from "../projectCard/projectCard";


function Portfolio() {
    //background img, content Text, project 세부 내용 DB에서 받아오기

    return(
        <div className={styles.portfolioBox}>
            <div className={styles.portfolioTitle}>PORTFOLIO</div>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}

export default Portfolio;