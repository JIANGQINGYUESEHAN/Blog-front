import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const our: FC<IProps> = () => {
    return <div> Our</div>
}

export default memo(our)
