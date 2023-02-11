import { usersCardProps } from '@/utils/types'
import React from 'react'
import './userCard.styles.scss'

const UsersCard = ({ card: { Icon, title, count,color } }: { card: usersCardProps }) => {
    return (
        <div className='card'>
            <div className='icon' style={{
                backgroundColor: color
            }}>

            {<Icon style={{
                fill: 'white'
            }}/>}
            </div>
            <h5>{title}</h5>
            <p>{count}</p>

        </div>
    )
}

export default UsersCard