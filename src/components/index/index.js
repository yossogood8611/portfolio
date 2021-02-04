import React, {useEffect} from 'react';
import styles from './index.module.css';
import IndexMessage from "../indexMessage/indexMessage";
import Header from '../header/header';
import Paper from '../paper/paper';

function Index() {

    return(
        <div className={styles.indexBox}>
            <div className={styles.indexBack}>
                <div className={styles.notebook}>
                    <Header/>
                    <IndexMessage/>
                </div>
                <Paper/>
            </div>
        </div>
    )
}

export default Index;