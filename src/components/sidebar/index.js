import React from 'react'
import styles from './index.module.scss'
import SiteMeta from './sitemeta'
import Baritem from './baritems'
import Links from './links/index'
import Copyright from './copyright/index'
// import "./index.module.sass"

const Sidebar = () => {
    console.log(styles);
    return (
    <div className={styles["sideBar"]} id="sideBar" >
        <div style={{
            width:"80%",
            backgroundColor:'green',
            float:'right',
            // marginRight: '6%'
        }}>    
        <SiteMeta></SiteMeta>
        <Baritem content="item1"></Baritem>    
        <Baritem content="item2"></Baritem>
        <Baritem content="item3"></Baritem>
        <Links></Links>
        <Copyright></Copyright>
        </div>
    </div>)
}

export default Sidebar