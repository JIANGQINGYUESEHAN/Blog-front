"use client"

import React, { useState } from 'react'
import styles from './header.module.scss'
import '@/assets/css/iconfont.css'
import Link from 'next/link'


export default function Header() {
    const [count,] = useState([{
        id: 1,
        code: "\uE685",
        text: '首页',
        link: '/'
    }, {
        id: 2,
        code: '\uE686',
        text: '文章',
        link: '/article'
    }, {
        id: 3,
        code: '\ue688',
        text: '我',
        link: '/about'
    },
    {
        id: 4,
        code: '\uE687',
        text: ' 关于',
        link: '/our'

    }, {
        id: 5,
        code: '\ue688',
        text: '项目',
        link: '/project'
    }])
    //记录index
    const [indexOne, ClickIndex] = useState(0)
    function ClickSkip(one: any) {

        ClickIndex(one)
    }
    function NavigationItem(item: any, index: number) {
        let Name = indexOne == index ? 'li' : 'lia';


        return (
            <Link href={item.link} className={styles.page} key={item.id}>
                <div className={styles.item} onClick={() => ClickSkip(index)}>
                    <span className={`${styles.iconfonta} iconfont`}>{item.code}</span>
                    <span className={styles[Name]}> {item.text}</span>
                </div>
            </Link>
        )
    }

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <span>zy 半江秋月</span>
            </div>
            <div className={styles.right}>
                {count.map((item, index) => {
                    return (
                        NavigationItem(item, index)
                    )
                })}
            </div>

        </div>
    )
}
