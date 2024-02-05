import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import style from './style.module.scss'
import { img } from '../../../assets/utils/BaseData';
import { ScheduleOutlined, UserOutlined } from '@ant-design/icons';


interface IProps {
    children?: ReactNode
}

const ArticleDetail: FC<IProps> = () => {
    return <div className={style.articleDetail}>

        <div className={style.imgDiv}>
            <img src='https://yanyunfeng.com/api/files/1703055944107.png' className={style.img} />
            <div className={style.articleDetailIcon}>
                <div className={style.Title}>
                    组件中，我假设了一个简单的结构来匹配截图的内容布局。在实际的组件中，我假设了一个简单的结构来匹配截图的内容布局。在实际的开发中，你可能还开发中，你可能还
                </div>

                <div className={style.icon}>
                    <div className={style.iconItem}>
                        <div className={style.iconCtrl}>
                            <UserOutlined rev={undefined} />
                        </div>&nbsp;
                        <span>zy</span>

                    </div>
                    <div className={style.dateItem}>
                        <div className={style.iconCtrl}>
                            <ScheduleOutlined rev={undefined} />
                        </div>&nbsp;
                        <span>2023-12-25 17:29:30</span>

                    </div>

                </div>
            </div>
        </div>

        <div className={style.articleContent}></div>

    </div>
}

export default memo(ArticleDetail)
