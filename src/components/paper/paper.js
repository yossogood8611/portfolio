import React,{useEffect} from 'react';
import styles from './paper.module.css';

function Paper() {
    return(
        <div className={styles.paper}>
            <div className={styles.paper2}></div>
            <a href="#about">
                <div className={styles.paper1}></div>
            </a>
        </div>
    )
}

export default Paper;