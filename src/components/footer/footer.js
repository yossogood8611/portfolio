import styles from './footer.module.css';
import {Router, Link} from 'react-router-dom';

function Footer() {
    return (
        <div className={styles.footerBox}>
                <div className={styles.tri}></div>
                <div className={styles.content}>Design by <div>&nbsp;Yujin</div></div>
        </div>
    )
}

export default Footer;