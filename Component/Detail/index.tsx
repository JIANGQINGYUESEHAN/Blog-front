import React from 'react'
import styles from './Detail.module.scss'

export default function Detail() {
    return (
        <div className={styles.Detail}>

            <div className={styles.more}>
                <span className='iconfont' style={{ fontSize: '20px' }}>
                    &#xe68b;
                </span>&nbsp;
                <span className={styles.a}>分类</span>

            </div>
            {/*文章类别 */}
            <div className={styles.article}>
                <div className={styles.div1}>
                    <span> TypeScript </span>&nbsp; <span>(1)</span>
                </div>
            </div>
        </ div>
    )
}
