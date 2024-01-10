import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './Title.module.scss'
interface IProps {
    children?: ReactNode
}

const Title: FC<IProps> = () => {
    return <div className={styles.Title}>

        <div className={styles.date}>

            <div className={styles.text}>
                <span className={styles.Span}>
                    老将军,可知天水姜伯约
                </span>
            </div>
        </div>
    </div>
}

export default memo(Title)
