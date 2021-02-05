import React from 'react';
import styles from './progressBar.module.css';

function ProgressBar() {
    //DB에서 기술 이름, 숙련도 받아와서 숙련도에 맞게 색, 길이 변화하게
    return(
        <div>
            <div className={styles.bar}>CSS</div>
        </div>
    )
}

export default ProgressBar;