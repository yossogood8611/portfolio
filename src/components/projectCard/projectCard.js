import React, {useState} from 'react';
import styles from './projectCard.module.css';
import Modal from 'react-awesome-modal';


function ProjectCard() {
    let [visible, setvisible] = useState(false);

    const openModal=()=> setvisible(true);
    const closeModal=()=> setvisible(false);

    return(
        <div>
            <div className={styles.projectBox}>
                <div className={styles.projectContent}>
                    <div className={styles.projectText}>
                        <div className={styles.projectTitle}>GIVECOIN</div>
                        <div className={styles.projectUsed}>Design/Front-End</div>
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
                        프로젝트 명 : <br/>
                        설명 : <br/>
                        git : <br/>
                        <div className={styles.modalExit} onClick={closeModal}></div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectCard;