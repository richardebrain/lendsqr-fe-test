import { formattedDate, checkActive } from '@/hooks/dateHook';
import { formatNumbers } from '@/hooks/phoneNumber';
import { AlluserProps } from '@/utils/types';
import React, { useState } from 'react'
import { IconColon } from '../icons/icon';
import UserDetailsCard from '../userDetailsCard/UserDetailsCard';

const TableDashboard = ({ user: { orgName, userName, profile: { phoneNumber }, createdAt, lastActiveDate, id, email } }: { user: AlluserProps }) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show)
    }
    const [blackList, setBlackList] = useState(false);
    const [pending, setPending] = useState(false);
    const [activate, setActivate] = useState(false);

    return (
        <tr key={id} className='row_data'>
            <td>
                {orgName.split('-')[0]}

            </td>
            <td>
                {userName}

            </td>
            <td>
                {email}

            </td>
            <td>
                {formatNumbers(phoneNumber)}

            </td>
            <td>
                {formattedDate(createdAt)}

            </td>
            <td className='show_card'>
                <div className='status'>
                    <span className={`${checkActive(lastActiveDate) == 'Active' || activate ? 'active' : blackList ? 'blacklist' : pending ? 'pending' : 'inactive'} status_check`}>
                        {
                            blackList ? 'Blacklisted' : pending ? 'Pending' : activate ? 'Active' :
                                checkActive(lastActiveDate)
                        }
                    </span>
                    <div
                        onClick={() => handleToggle()}
                        className='status_icon'
                        key={id}

                    >

                        {<IconColon />}
                    </div>
                </div>

                {
                    show && <UserDetailsCard
                        id={id}
                        setBlackList={setBlackList}
                        blacklist={blackList}
                        setActivate={setActivate}
                        activate={activate}
                    />
                }
            </td>
        </tr>
    )
}

export default TableDashboard