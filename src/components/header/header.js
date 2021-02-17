import styles from './header.module.css';
import react, {useState, useEffect} from 'react';

const useScroll = () => {
    const [state, setState] = useState({
        x : 0,
        y : 0
    });
    const onScroll = () => {
        setState({x : window.scroll, y : window.scrollY});
    };
    useEffect(()=> {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
};

function Header() {
    const { y } = useScroll();
    return (
        <div className={styles.headerBox} style={
            {position : y > 770 ? "fixed" : "relative",
                opacity : y > 770 ? "77%" : "100%"}
        }>
            <a href="#home"><div>HOME</div></a>
            <a href="#about"><div>ABOUT</div></a>
            <a href="#portfolio"><div>PORTFOLIO</div></a>
            <a href="#blog"><div>BLOG</div></a>
            <a href="#contact"><div>CONTACT</div></a>
        </div>
    )
}

export default Header;