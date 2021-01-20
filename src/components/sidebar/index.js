import React from 'react'
import styles from './index.module.scss'
import SiteMeta from './sitemeta'
// import "./index.module.sass"

const Sidebar = () => {
    console.log(styles);
    return (
    <div className={styles["sideBar"]} id="sideBar" >
        <SiteMeta></SiteMeta>    
    </div>)
}

export default Sidebar