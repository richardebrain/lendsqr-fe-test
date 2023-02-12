import React from 'react'
import './userDetailsCard.styles.scss'
import { IconActivate, IconBlacklist, IconEyes } from '../icons/icon'
import { Link } from 'react-router-dom'

type props = {
    id: string
}
const UserDetailsCard = ({ id }: props) => {
    return (
        <div className={`userDetails_container`}>
            <Link to={`/users/${id}`}>
                <IconEyes />
                <span>View Details</span>
            </Link>
            <div>
                <IconBlacklist />
                <span>Blacklist User</span>
            </div>

            <div>
                <IconActivate />
                <span>Activate User</span>
            </div>


        </div>
    )
}

export default UserDetailsCard