import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const ArticleDetail: FC<IProps> = () => {
    return <div> ArticleDetail</div>
}

export default memo(ArticleDetail)
