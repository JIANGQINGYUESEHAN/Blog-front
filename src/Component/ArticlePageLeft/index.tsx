import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './ArticlePage.module.scss'
import { img } from '@/assets/utils/BaseData'
import Image from 'next/image';
import { ScheduleOutlined } from '@ant-design/icons';
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
                <div className={styles.content}>

                </div>
                <div className={styles.footer}>
                    <span className={styles.tag}>VUE</span>
                </div>
            </div>
        </div>


    </div>
}

export default memo(ArticlePageLeft)
