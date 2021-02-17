import React from 'react';
import styles from './blog.module.css';
import Aos from "aos";
import "aos/dist/aos.css";


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
           </div>
       </div>
    )
}

export default Blog;