import React, {useState} from 'react';
import styles from './mystory.module.css';
import Modal from 'react-awesome-modal';
import axios from 'axios';

function Mystory() {
    let [visible, setvisible] = useState(false);

    const openModal=()=> setvisible(true);
    const closeModal=()=> setvisible(false);

    const [myStory, setMyStory] = useState([1,1,1]);

    React.useEffect(()=>{
        getMyStory();
    },[]);

    let getMyStory = async function() {
        let result = await axios({
            method : 'GET',
            url : 'http://localhost:3001/about',
            headers : {'Access-Control-Allow-Origin' : '*'},
            mode : 'cors',
        })
        setMyStory(result.data);
        console.log(result.data);
    }

    return(
        <div>
            <div className={styles.mystoryBtn} onClick={openModal}>
                MY STORY
            </div>
            <Modal visible={visible} effect="fadeInUp" width="800" height="600">
                <div>
                    <div className={styles.myStory}>
                        <div className={styles.myStoryTitle}>My story</div>
                        <div>
                            {myStory[0].myStory}
                        </div>
                        <div className={styles.exitBtn} onClick={closeModal}>나가기</div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Mystory;