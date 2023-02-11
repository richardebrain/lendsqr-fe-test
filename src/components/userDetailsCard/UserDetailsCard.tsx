import React from 'react'
import './userDetailsCard.styles.scss'
import { IconActivate,IconBlacklist,IconEyes } from '../icons/icon'

const UserDetailsCard = () => {
    return (
        <div className='userDetails_container'>
            <div>
                <IconEyes/>
                <span>View Details</span>
            </div>
            <div>
                <IconBlacklist/>
                <span>Blacklist User</span>
            </div>

            <div>
                <IconActivate/>
                <span>Activate User</span>
            </div>


        </div>
    )
}

export default UserDetailsCard