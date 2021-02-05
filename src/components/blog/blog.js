import React from 'react';
import styles from './blog.module.css';


function Blog() {
    return(
       <div>
           <div className={styles.blogBox}>
               <div className={styles.blogTitle}>BLOG</div>
           </div>
       </div>
    )
}

export default Blog;