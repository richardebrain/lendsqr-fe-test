import React from 'react'
import './userDetailsCard.styles.scss'
import { IconActivate, IconBlacklist, IconEyes } from '../icons/icon'
import { Link } from 'react-router-dom'
import { useUserContext } from '@/context/userContext'

type props = {
    id: string,

}
const UserDetailsCard = ({ id }: props) => {
    const { setBlackListUser, setIsActivated } = useUserContext()

    const handleActivate = (id: string) => {
        setIsActivated(id)
    }
    const handleBlacklist = (id: string) => {
        setBlackListUser(id)
    }
    return (
        <div className={`userDetails_container`}>
            <Link to={`/users/${id}`} className='option_btn'>
                <IconEyes />
                <span>View Details</span>
            </Link>
            <button
                onClick={() => handleBlacklist(id)}
                className='option_btn'
                >
                <IconBlacklist />
                <span>Blacklist User</span>
            </button>

            <button
             className='option_btn' 
             onClick={() => handleActivate(id)}
             >
                <IconActivate />
                <span>Activate User</span>
            </button>


        </div>
    )
}

export default UserDetailsCard