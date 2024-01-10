import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './ArticlePage.module.scss'
import { img } from '@/assets/utils/BaseData'
import Image from 'next/image';
interface IProps {
    children?: ReactNode
}

const ArticlePageLeft: FC<IProps> = () => {
    return <div className={styles.ArticlePage}>
        <div className={styles.left}>
            <div className={styles.age}> <Image src={img}
                width={360}
                height={300}
                alt='头像'
                className={styles.image} /></div>
        </div>
        <div className={styles.right}></div>


    </div>
}

export default memo(ArticlePageLeft)
