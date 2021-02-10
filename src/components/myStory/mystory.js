import React, {useState} from 'react';
import styles from './mystory.module.css';
import Modal from 'react-awesome-modal';

function Mystory() {
    let [visible, setvisible] = useState(false);

    const openModal=()=> setvisible(true);
    const closeModal=()=> setvisible(false);

    return(
        <div>
            <div className={styles.mystoryBtn} onClick={openModal}>
                MY STORY
            </div>
            <Modal visible={visible} effect="fadeInUp" width="1000" height="800">
                <div>
                    <div className={styles.myStory}>
                        <div className={styles.myStoryTitle}>My story</div>
                        <div>
                            서울과학기술대학교 이유진입니다. <br/>
                            도전을 좋아하는 프론트엔드 & 퍼블리셔 입니다.
                        </div>
                        <div className={styles.exitBtn} onClick={closeModal}>나가기</div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Mystory;