import React from 'react'
import styles from './index.module.scss'

const Copyright = ({content}) => {
    return (<div className={styles.body}>
        {content}
    </div>)
}

export default Copyright