import React from 'react';
import styles from './profile.module.css';
import image from './profile.jpg';

function Profile() {
    return(
        <div>
            <img className={styles.profile} src={image}/>
        </div>
    )
}

export default Profile;