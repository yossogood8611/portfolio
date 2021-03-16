import React, {useState} from 'react';
import styles from './projectCard.module.css';
import Modal from 'react-awesome-modal';
import axios from 'axios';

function ProjectCard() {
    let [visible, setvisible] = useState(false);

    const openModal=()=> setvisible(true);
    const closeModal=()=> setvisible(false);

    const [myPortfolio, setPortfolio ] = useState([1,1,1]);

    React.useEffect(()=>{
        getPortfolio();
    },[]);

    let getPortfolio = async function() {
        let result = await axios({
            method : 'GET',
            url : 'http://localhost:3001/portfolio',
            headers : {'Access-Control-Allow-Origin' : '*'},
            mode : 'cors',
        })
        setPortfolio(result.data);
        console.log(result.data);
    }

    return(
        <div>
            {myPortfolio.map(arr => (
                <div>
                    <div key={arr.p_id}>
                        <div className={styles.projectBox}>
                            <div className={styles.projectContent}>
                                <div className={styles.projectText}>
                                    <div className={styles.projectTitle}>{arr.title}</div>
                                    <div className={styles.projectUsed}>{arr.tech}</div>
                                </div>
                                <div className={styles.plus} onClick={openModal}></div>
                            </div>
                        </div>
                        <Modal visible={visible} effect="fadeInUp" width="1000" height="700">
                            <div className={styles.modalBox}>
                                <div className={styles.modalImg}>
                                    <div className={styles.modalPrev}></div>
                                    <div className={styles.modalNext}></div>
                                </div>
                                <div className={styles.modalEx}>
                                    <span className={styles.modalTitle}>{arr.title}<br/></span>
                                    <span className={styles.modalUse}>{arr.tech}<br/></span>
                                    <hr className={styles.modalHr}/>
                                    <span className={styles.modalExText}>{arr.git}<br/>{arr.explanation}</span>
                                    <div className={styles.modalExit} onClick={closeModal}>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard;