import React, { Children } from 'react'
import styles from './style.module.scss'


export default function WhiteBoard({ children }) {
    return (
        <div className={styles.whiteBoard}>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}
