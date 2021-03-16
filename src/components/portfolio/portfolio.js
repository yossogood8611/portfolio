import React from 'react';
import styles from './portfolio.module.css';
import ProjectCard from "../projectCard/projectCard";
import Aos from "aos";
import "aos/dist/aos.css";


function Portfolio() {
    React.useEffect(()=> {
        Aos.init({});
    },[]);

    //background img, content Text, project 세부 내용 DB에서 받아오기

    return(
        <div className={styles.portfolioBox} id='portfolio'>
            <div data-aos="flip-right" data-aos-duration="1500">
                <div className={styles.portfolioTitle}>PORTFOLIO</div>
            </div>
            <ProjectCard/>
        </div>
    )
}

export default Portfolio;