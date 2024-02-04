"use client"
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import style from './article.module.scss'
import ArticleItem from '@/Component/ArticleItem'
import ChangeBottom from '@/Component/changeBottom'

interface IProps {
    children?: ReactNode
}

const Article: FC<IProps> = () => {
    const [itemsPerPage, setItemsPerPage] = useState(4)


    return <div className={style.page}>
        <div className={style.input}>

            <input type="text" className={style.inputBox} placeholder="请输入激活码并按Enter回车..." />
        </div>
        <div className={style.content}>
            <ArticleItem />

            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />


        </div>
        <div className={style.change}>
            <ChangeBottom totalItems={10} itemsPerPage={itemsPerPage} />
        </div>
    </div>
}

export default memo(Article)
