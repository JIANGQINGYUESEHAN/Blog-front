import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './ArticlePage.module.scss'
import { img } from '@/assets/utils/BaseData'
import Image from 'next/image';
import { FireOutlined, FormOutlined, GlobalOutlined, ScheduleOutlined } from '@ant-design/icons';
interface IProps {
    children?: ReactNode
}

const ArticlePageLeft: FC<IProps> = () => {
    return <div className={styles.ArticlePage}>
        <div className={styles.left}>
            <div className={styles.age}>
                <Image src={img}
                    width={360}
                    height={300}
                    alt='头像'
                    className={styles.image} />
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.card}>
                <div className={styles.header}>

                    <span className={styles.icon}><ScheduleOutlined rev={undefined} /></span>
                    <span className={styles.date}>2023-12-25 17:29:30</span>
                </div>
                <div className={styles.Title}>
                    <span className={styles.Title} >Element-UI 控制台报错 Prop being mutated: "placement"</span>
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
                <div className={styles.content}>
                    <span className={styles.TitleContent} >在 在 CSS 中，我设置了 .content 的 line-height 和 height。line-height 是每行的高度，而 height 是基于 line-height 和行数 (3 行) 计算得出的总高度。这样可以确保容器高度足以容纳三行文本。CSS 中，我设置了 .content 的 line-height 和 height。line-height 是每行的高度，而 height 是基于 line-height 和行数 (3 行) 计算得出的总高度。这样可以确保容器高度足以容纳三行文d</span>
                </div>
                <div className={styles.footer}>
                    <div className={styles.Label}>
                        <span className='iconfont' style={{ fontSize: '16px', verticalAlign: 'middle' }}> &#xe607;</span>
                        <span> VUE</span>
                    </div>

                </div>
            </div>
        </div>


    </div>
}

export default memo(ArticlePageLeft)
