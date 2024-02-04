import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './ArticleItem.module.scss'
import { FireOutlined, FormOutlined, GlobalOutlined, ScheduleOutlined } from '@ant-design/icons'
import Link from 'next/link'




interface IProps {
    children?: ReactNode,
    article: number



}

const ArticleItem: FC<IProps> = ({ article }) => {
    console.log(article);

    return (<Link href={`/articledetail/${article}`} className={styles.page} >
        <div className={styles.ArticleItem}>
            <div className={styles.header}>

                <span className={styles.icon}><ScheduleOutlined rev={undefined} /></span>
                <span className={styles.date}>2023-12-25 17:29:30</span>


            </div>
            <div className={styles.content}>
                <span className={styles.Title}>
                    {article}  在使用 git 时，偶尔会遇到这个提示，每次都忘记怎么处理。这不，今天又遇到了，于是就记录下，免得下次又要查找了。
                </span>
            </div>
            <div className={styles.icona}>
                <div className={styles.statusItem}>
                    <span className={styles.icon}>
                        <FireOutlined rev={undefined} />
                    </span>
                    <span className={styles.date}>86 热度</span>
                </div>
                <div className={styles.statusItem}>
                    <span className={styles.icon}>
                        <GlobalOutlined rev={undefined} />

                    </span>
                    <span className={styles.date}>86 热度</span>
                </div>
                <div className={styles.statusItem}>
                    <span className={styles.icon}>

                        <FormOutlined rev={undefined} />
                    </span>
                    <span className={styles.date}>86 热度</span>
                </div>
            </div>
        </div>
    </Link>)

}

export default memo(ArticleItem)
