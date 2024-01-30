import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { img } from '@/assets/utils/BaseData'
import { ScheduleOutlined } from '@ant-design/icons'
interface IProps {
    children?: ReactNode
}

const PageList: FC<IProps> = () => {
    return <div className={styles.PageList}>
        <div className={styles.content}>
            <div className={styles.left}>

                <div className={styles.image}>
                    <Image src={img} alt={''} width={100} height={60} />
                </div>
            </div>
            <div className={styles.right}>
                要为图片添加样式并创建相应的SCSS（Sass）代码，首先需要了解您希望的具体样式和结构。由于提供的图片是一个静态图像，我们可以在其周围添加样式，但无法直接修改图片内容。因此，请提供以下信息以便我更好地满足您的需求
            </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.header}>

                <span className={styles.icon}><ScheduleOutlined rev={undefined} /></span>
                <span className={styles.date}>2023-12-25 17:29:30</span>


            </div>

        </div>
    </div>
}

export default memo(PageList)
