"use client"
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import style from './style.module.scss'
interface IProps {
    children?: ReactNode,
    totalItems: number,
    itemsPerPage: number
}

const ChangeBottom: FC<IProps> = ({ totalItems, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    function CountPages() { }

    const goToPreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <div className={style.paginationContainer}>
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>上一页</button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>下一页</button>
        </div>
    );
};

export default memo(ChangeBottom)
