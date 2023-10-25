"use client"

import React, { useState } from 'react'
import styles from './header.module.css'
import '@/assets/css/iconfont.css'

export default function Header() {
    const [count,] = useState([{
        id: 1,
        code: "\uE685",
        text: '首页'
    }, {
        id: 2,
        code: '\uE686',
        text: '文章'
    }, {
        id: 3,
        code: '\uE687',
        text: '我'
    }, {
        id: 4,
        code: '\ue688',
        text: '关于'
    }])
    return (
        <div className={styles.header}>
            <div className={styles.shadow}></div>
            <div className={styles.name}>
                <span className={styles.NameSpan}>  ZY 半江秋月</span>
            </div>
            <div className={styles.left}>
                <ul className={styles.ul}>


                    {count.map((item, index) => {
                        return <li className={styles.li} key={item.id}>
                            <span className='iconfont'>{item.code}</span>
                            <span className={styles.page}>{item.text}</span>
                        </li>
                    })}





                </ul>
            </div>

        </div>
    )
}
