import React, { FC, ReactNode } from 'react'
import styles from './Detail.module.scss'
interface IProps {
    children?: ReactNode
    iconfont: string,
    name: string,
    height?: number,
    marginTop?: number,
    backgroundColor?: string

}
const Detail: FC<IProps> = (props) => {
    let { children, iconfont, name, height = 340, marginTop = 40, backgroundColor = `antiquewhite` } = props
    return (
        <div className={styles.Detail} style={{ height: `${height}px`, marginTop: `${marginTop}px`, backgroundColor: `${backgroundColor}` }}>

            <div className={styles.more}>
                <span className='iconfont' style={{ fontSize: '20px' }}>
                    {/* &#xe68b; */}
                    {iconfont}
                </span>&nbsp;
                <span className={styles.a}>
                    {/* 分类 */}
                    {name}
                </span>

            </div>
            {/*文章类别 */}
            <div className={styles.article}>

                {children}


            </div>
        </ div>
    )
}



export default Detail


