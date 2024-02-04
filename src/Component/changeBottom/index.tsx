"use client"
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import style from './style.module.scss'
interface IProps {
    children?: ReactNode,
    totalItems: number,
    itemsPerPage: number,
    currentPage: number,
    onChangePage: (newPage: number) => void
}

const ChangeBottom: FC<IProps> = ({ totalItems, itemsPerPage, onChangePage, currentPage }) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);


    const goToPreviousPage = () => {
        onChangePage(Math.max(currentPage - 1, 1));
    };

    const goToNextPage = () => {
        onChangePage(Math.min(currentPage + 1, totalPages));
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
