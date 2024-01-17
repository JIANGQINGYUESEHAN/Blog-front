import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import style from './article.module.scss'
import ArticleItem from '@/Component/ArticleItem'

interface IProps {
    children?: ReactNode
}

const Article: FC<IProps> = () => {
    return <div className={style.page}>

        <div className={style.background}>
            <input type="text" className={style.inputBox} placeholder="请输入激活码并按Enter回车..." />
        </div>
        <div className={style.content}> </div>
    </div>
}

export default memo(Article)
