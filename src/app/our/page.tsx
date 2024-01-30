import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

interface IProps {
    children?: ReactNode
}

const our: FC<IProps> = () => {
    return <div className={styles.our}>
        <div className={styles.verse}>

        </div>
    </div>
}

export default memo(our)
