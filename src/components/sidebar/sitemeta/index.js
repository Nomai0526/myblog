import React from 'react'
import styles from './index.module.scss'
import { useStaticQuery, graphql } from 'gatsby'

const Sitemeta = () => {
    const {site} = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                      title
                      description
                    }
                }
            }
        `
    )

    console.log(site);
    

    return (
        <div className={styles["sitemeta"]}>
            <div className={styles["sitemeta__head"]}>
                {site.siteMetadata.title}
            </div>
            <div className={styles["sitemeta__description"]}>
                {site.siteMetadata.description}
            </div>
        </div>
    )
}

export default Sitemeta