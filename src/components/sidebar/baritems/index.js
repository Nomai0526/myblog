import React from 'react'
import styles from './index.module.scss'

const Baritems = ({content}) => {
    return (<div className={styles.item}>
        {content}
    </div>)
}

export default Baritems;