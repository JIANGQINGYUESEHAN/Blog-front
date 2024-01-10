import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './Auth.module.scss'
import Image from 'next/image';
import { img } from '@/assets/utils/BaseData'
interface IProps {
    children?: ReactNode
}

const Auth: FC<IProps> = () => {
    return <div className={styles.Auth}>
        <div className={styles.content}>

            <Image src={img}
                width={100}
                height={100}
                alt='头像'
                className={styles.image} />


        </div>
        <div className={styles.all}>
            <div className={styles.article}>
                <span>18</span>
                <div>sss</div>

            </div>
            <div className={styles.classification}>
                <span>18</span>
                <div>sss</div>
            </div>
        </div>
        <div className={styles.bottom}>
            <div>sssssssss</div>
        </div>
    </div>
}

export default memo(Auth)
