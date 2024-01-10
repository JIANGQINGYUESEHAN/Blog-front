import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './Article.module.scss'
import Image from 'next/image'
import { img } from '@/assets/utils/BaseData'


interface IProps {
    children?: ReactNode,
    text?: string,
    imge?: string
}

const Article: FC<IProps> = (props) => {
    const txt = '如今跨平台开发是非常流行的一种软件开发方案，正所谓一套代码，到处运行，省时又省力。这种方案用来做一些性能和体验方面要求没有那么高的项目时，确实是一种经济又实惠的选择。 目前市面上主流的几种多端框架分别有'
    let { text = txt, imge = img } = props
    return <div className={styles.Article}>
        <div className={styles.aImag}>
            <Image alt='文章图片' src={imge} width={120} height={120} className={styles.img} />
        </div>

        <div className={styles.content}>
            <p className={styles.Span}>
                {text}
            </p>
        </div>
    </div>
}

export default memo(Article)
