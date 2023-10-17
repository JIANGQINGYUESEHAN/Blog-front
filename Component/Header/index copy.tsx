import React from 'react'
import styles from './header.module.css'
export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.NameSpan}>  ZY 半江秋月</h1>
            <div className={styles.shadow}>

                <div className={styles.left}></div>
            </div>

        </div>
    )
}
