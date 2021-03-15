import React, {useState} from 'react';
import styles from './about.module.css';
import Profile from "../profile/profile";
import Mystory from "../myStory/mystory";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from 'axios';

function About() {
    const [techStack, setTechStack] = useState([]);

    React.useEffect(()=> {
        Aos.init({});
        getTechStack();
        console.log(techStack);
    },[]);

    let getTechStack = async function() {
        let result = await axios ({
            method : 'GET',
            url : 'http://localhost:3001/tech',
            headers: {'Access-Control-Allow-Origin': '*'},
            mode: 'cors',
    })
        setTechStack(result.data);
        console.log(result.data);
    }

    return(
        <div className={styles.aboutBox} id='about'>
            <div data-aos="flip-right" data-aos-duration="1500">
                <span className={styles.aboutTitle}>ABOUT</span>
            </div>
            <div className={styles.aboutContent}>
                <div className={styles.aboutProfile}>
                    <Profile/>
                    <Mystory/>
                </div>
                <div className={styles.progressChart}>
                    <div>
                        {techStack.map(arr=> (
                            <div key={arr.t_id} className={styles.bar}>{arr.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;