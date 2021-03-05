import React from 'react';
import styles from './blog.module.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Instar from './instar.svg';
import Git from './git.svg';


function Blog() {
    React.useEffect(()=> {
        Aos.init({});
    },[]);

    return(
       <div id='blog'>
           <div className={styles.blogBox}>
               <div data-aos="flip-right" data-aos-duration="1500">
                   <div className={styles.blogTitle}>BLOG</div>
               </div>
               <div className={styles.contactItems}>
                   <a href="https://www.instagram.com/yu_jin_200"><img src={Instar} width="70px" height="70px"/></a>
                   <a href="https://github.com/yossogood8611"><img src={Git} width="70px" height="70px"/></a>
               </div>
           </div>
       </div>
    )
}

export default Blog;