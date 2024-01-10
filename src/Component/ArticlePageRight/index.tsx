import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './ArticlePage.module.scss'

interface IProps {
    children?: ReactNode
}

const ArticlePageRight: FC<IProps> = () => {
    return <div className={styles.ArticlePage}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>


    </div>
}

export default memo(ArticlePageRight)
