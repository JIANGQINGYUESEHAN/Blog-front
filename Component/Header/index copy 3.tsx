"use client"

import React, { useState } from 'react'
import styles from './header.module.css'
import '@/assets/css/iconfont.css'

export default function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.shadow}></div>
            <div className={styles.name}>
                <span className={styles.NameSpan}>  ZY 半江秋月</span>
            </div>
            <div className={styles.left}>
                <ul className={styles.ul}>
                    <li className={styles.li} >
                        <span className='iconfont'>&#xe685;</span>
                        <span className={styles.page}>首页</span>
                    </li>
                    <li className={styles.li} >
                        <span className='iconfont'>&#xe686;</span>
                        <span className={styles.page}>文章</span>
                    </li> <li className={styles.li} >
                        <span className='iconfont'>&#xe687;</span>
                        <span className={styles.page}>我的</span>
                    </li> <li className={styles.li} >
                        <span className='iconfont'>&#xe688;</span>
                        <span className={styles.page}>关于</span>
                    </li>



                </ul>
            </div>

        </div>
    )
}
