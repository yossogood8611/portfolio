import styles from './header.module.css';

function Header() {
    return (
        <div className={styles.headerBox}>
            <div>HOME</div>
            <div>ABOUT</div>
            <div>PORTFOLIO</div>
            <div>BLOG</div>
            <div>CONTACT</div>
        </div>
    )
}

export default Header;