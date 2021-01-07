import React from 'react'
import styles from './main.module.scss'


const main = ({children}) => {
    return (<div style={{textAlign:"center"}} id={styles["main"]} >
        {children}
    </div>)
}

export default main