import React from 'react'
import styles from './index.module.scss'

const Copyright = ({ content }) => {
    return (
        <div className={styles.copyright}
            dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export default Copyright