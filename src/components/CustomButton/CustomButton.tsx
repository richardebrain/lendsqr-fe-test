import { type } from 'os'
import React from 'react'
import './customButton.styles.scss'
type Props = {
    children: React.ReactNode
    blacklist?: boolean
    activate?: boolean
    reset?: boolean
    filter?: boolean
    type: 'button' | 'submit' | 'reset' | undefined
    handleClick?: () => void
}
const CustomButton = ({ children, activate, blacklist, reset, filter, type, handleClick }: Props) => {
    return (
        <button className={`${activate ? 'active_btn' : blacklist ? 'blacklist' : reset ? 'reset' : filter ? 'filter' : ''
            } btn_container`} type={type} onClick={handleClick}>
            {children}
        </button>
    )
}

export default CustomButton