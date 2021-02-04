import React from 'react';
import {Typewriter} from 'react-typewriting-effect';
import styles from './indexMessage.module.css';

function IndexMessage() {
    return(
        <div className={styles.message}>
            Hello, I'm
            <Typewriter
                string=' Yujin'
                className={styles.impact}
            />
            <br/>
            I'm a web developer
        </div>
    )
}

export default IndexMessage;