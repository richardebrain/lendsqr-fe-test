import { type } from 'os'
import React from 'react'

type Props = {
    header: {
        title: string
        Icon: React.FC<React.SVGProps<SVGSVGElement>>
    }
    showFilter: boolean
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>
}
const TableHeader = ({ header, showFilter, setShowFilter }: Props) => {
    return (
        <th

            className={`${header.title == 'UserName' || header.title == 'Organisation' ? 'same' : header.title == 'Email' ? 'email' : ''}`}
        >
            <div className='th_child'>

                {header.title.toUpperCase()} {<header.Icon className='icon' onClick={() => setShowFilter(!showFilter)} />}
            </div>
        </th>
    )
}

export default TableHeader