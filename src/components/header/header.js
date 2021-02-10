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
            <div>HOME</div>
            <div>ABOUT</div>
            <div>PORTFOLIO</div>
            <div>BLOG</div>
            <div>CONTACT</div>
        </div>
    )
}

export default Header;