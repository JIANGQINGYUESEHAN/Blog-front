import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.scss'
interface IProps {
    children?: ReactNode
}

const ArticleList: FC<IProps> = () => {
    return <div className={styles.ArticleList}>
        <span className='title'>ARTICLELIST (0篇)</span>

    </div>
}

export default memo(ArticleList)
