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

        <div className={style.articleContent}>

            {/* <p>
                议来清理C盘：
                1. 使用磁盘清理工具
                Windows 7自带了一个名为“磁盘清理”的工具，可以帮助你删除不必要的文件并释放空间。                打开“开始”菜单，输入“磁盘清理”并按回车。
                选择要清理的驱动器（默认是C盘），然后点击“确定”。
                选择你想要删除的文件类型，如临时文件、系统错误内存转储文件、回收站等，然后点击“确定”并确认删除。
                2. 清理系统还原和阴影副本
                系统还原点和阴影副本（用于备份）也可以占用大量空间。
                打开“控制面板”“系统和安全”“系统”“系统保护”。
                在“属性”窗口中，选择“系统保护”标签，然后选择C盘，点击“配置”。
                你可以选择“删除”来移除所有还原点（除了最近的那个），或者调整磁盘空间使用情况议来清理C盘：
                1. 使用磁盘清理工具
                Windows 7自带了一个名为“磁盘清理”的工具，可以帮助你删除不必要的文件并释放空间。
                打开“开始”菜单，输入“磁盘清理”并按回车。
                选择要清理的驱动器（默认是C盘），然后点击“确定”。
                选择你想要删除的文件类型，如临时文件、系统错误内存转储文件、回收站等，然后点击“确定”并确认删除。
                2. 清理系统还原和阴影副本
                系统还原点和阴影副本（用于备份）也可以占用大量空间。
                在“属性”窗口中，选择“系统保护”标签，然后选择C盘，点击“配置”。
                你可以选择“删除”来移除所有还原点（除了最近的那个），或者调整磁盘空间使用情况

            </p> */}

        </div>

    </div>
}

export default memo(ArticleDetail)
