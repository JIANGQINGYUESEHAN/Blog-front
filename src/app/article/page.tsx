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
    const [itemsPerPage,] = useState(4)
    const [currentPage, setCurrentPage] = useState(1);


    const handleChangePage = (newPage: number) => {
        console.log(newPage);

        setCurrentPage(newPage);
    };

    // 计算当前显示的文章项
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    console.log(indexOfFirstItem);
    console.log(indexOfFirstItem);


    // 假设有一个总的文章列表 allArticles、
    let allArticles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const currentArticles = allArticles.slice(indexOfFirstItem, indexOfLastItem);


    return <div className={style.page}>
        <div className={style.input}>

            <input type="text" className={style.inputBox} placeholder="请输入激活码并按Enter回车..." />
        </div>
        <div className={style.content}>
            {currentArticles.map((article, index) => (
                <ArticleItem key={index} article={article} />
            ))}
        </div>
        <div className={style.change}>
            <ChangeBottom totalItems={10} itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onChangePage={handleChangePage}
            />
        </div>
    </div>
}

export default memo(Article)
