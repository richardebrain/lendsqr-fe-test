import React from 'react'
import './userDetailsCard.styles.scss'
import { IconActivate, IconBlacklist, IconEyes } from '../icons/icon'
import { Link } from 'react-router-dom'

type props = {
    id: string,
    setBlackList: (value: boolean) => void
    blacklist: boolean
    activate: boolean
    setActivate: (value: boolean) => void
}
const UserDetailsCard = ({ id, setBlackList, blacklist, setActivate, activate }: props) => {
    const handleactivate = () => {
        setActivate(true)
        setBlackList(false)
    }
    const handleBlacklist = () => {
        setBlackList(true)
        setActivate(false)
    }
    return (
        <div className={`userDetails_container`}>
            <Link to={`/users/${id}`} className='option_btn'>
                <IconEyes />
                <span>View Details</span>
            </Link>
            <div onClick={() => handleBlacklist()} className='option_btn'>
                <IconBlacklist />
                <span>Blacklist User</span>
            </div>

            <div className='option_btn' onClick={() => handleactivate()}>
                <IconActivate />
                <span>Activate User</span>
            </div>


        </div>
    )
}

export default UserDetailsCard