import React from 'react'
import styles from './index.module.scss'
import SiteMeta from './sitemeta'
import Baritem from './baritems'
import SocialLink from './social-link/index'
import Copyright from './copyright/index'
import { useStaticQuery, graphql } from 'gatsby'
// import "./index.module.sass"

const Sidebar = () => {
    const { site } = useStaticQuery(graphql`
            query {
                site {
                    siteMetadata {
                      title
                      description
                      footerHTML
                      social {
                        douban
                        email
                        facebook
                        github
                        instagram
                        linkedin
                        rss
                        telegram
                        twitter
                        youtube
                    }
                    }

                }
            }
    `);

    return (
        <div className={styles["sideBar"]} id="sideBar" >
            <div style={{
                width: "80%",
                height: '100%',
                // backgroundColor: 'green',
                float: 'right',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                marginRight:'10px',
                // marginRight: '6%'
            }}>
                <SiteMeta></SiteMeta>
                <Baritem content="归档"></Baritem>
                <Baritem content="About"></Baritem>
                {/* <Baritem content="item3"></Baritem> */}
                <SocialLink social={site.siteMetadata.social}></SocialLink>
                <Copyright content={site.siteMetadata.footerHTML}></Copyright>
            </div>
        </div>)
}

export default Sidebar