import React from 'react'
import styles from './style.module.scss'
import O from '../O/index'
import X from '../X/index'


export default function Blue_Square({ value, onClick }) {
    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.blueSquare}>

                <div className={styles.value}>
                {value === "X" ? <X /> :value==="O"? <O/>:" "}
                </div>


            </div>
        </div>
    )
}
