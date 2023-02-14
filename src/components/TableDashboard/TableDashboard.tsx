
import { AlluserProps } from '@/utils/types';
import { useState } from 'react'
import { IconColon } from '../icons/icon';
import UserDetailsCard from '../userDetailsCard/UserDetailsCard';

const TableDashboard = ({ user: { orgName, userName, profile: { phoneNumber }, createdAt, lastActiveDate, id, email, status: { isBlackListed, isActivated, isActivatedPending, isBlackListedPending } } }: { user: AlluserProps }) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show)
    }

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
                {phoneNumber}

            </td>
            <td>
                {createdAt as string}

            </td>
            <td className='show_card'>
                <div className='status'>
                    <span className={`${isActivated ? 'active' : isBlackListed ? 'blacklist' : isActivatedPending || isBlackListedPending ? 'pending' : 'inactive'} status_check`}>
                        {
                            isBlackListed ? 'Blacklisted' : isActivatedPending || isBlackListedPending ? 'Pending' : isActivated ? 'Active' : 'Inactive'
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

                    />
                }
            </td>
        </tr>
    )
}

export default TableDashboard