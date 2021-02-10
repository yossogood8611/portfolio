import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.footerBox}>
                <div className={styles.tri} onClick={window.scrollTo({top:0, behavior:'smooth'})}></div>
                <div className={styles.content}>Design by <div>&nbsp;Yujin</div></div>
        </div>
    )
}

export default Footer;