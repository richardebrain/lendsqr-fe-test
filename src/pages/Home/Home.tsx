import React, { useEffect, useState } from 'react'
import './home.styles.scss'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { IconArrowBack, IconUserProfile } from '@/components/icons/icon'
import { AlluserProps } from '@/utils/types'
import StarReview from '@/components/starReview/StarReview'
import { UserDetailsView, USER_DETAILS_VIEW_ARRAY } from '@/utils/constant'
import { useAppContext } from '@/context/MainContext'
import CustomButton from '@/components/CustomButton/CustomButton'
import { useUserContext } from '@/context/userContext'


const Home = () => {
    const { id } = useParams<{ id: string }>()
    const { ActiveView, setActiveView, isAdmin } = useAppContext()
    const { getUser, user, loadingId, setUser, setLoadingId, setBlackListUser, setIsActivated
    } = useUserContext()
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAdmin) {
            navigate('/')
        }
    }, [isAdmin])

    useEffect(() => {
        getUser(id!)
    }, [])

    //if location has changed setUser to null
    useEffect(() => {
        setUser(null)
        setLoadingId(true)
    }, [location])

    const Component = UserDetailsView[ActiveView.screen]
    if (loadingId) {
        return <h2>Loading...</h2>
    }

    return (
        <div className='home_container'>
            <Link className="home_container_child child_link" to={'/users'}>
                <IconArrowBack />
                <span>Back to Users</span>

            </Link>
            {/* user Header */}
            <div className="home_container_child child_header">
                <h3>User Details</h3>
                <div>
                    <CustomButton blacklist type='button' handleClick={() => setBlackListUser(id!)}>BlackList User</CustomButton>
                    <CustomButton activate type='button' handleClick={() => setIsActivated(id!)}>Activate User</CustomButton>
                </div>

            </div>
            {/* user Header Summary */}
            <div className="home_container_child child_summary">
                <div className='summary_one'>
                    <div className='one_username'>
                        <div className='username_img'>
                            <IconUserProfile className='icon' />
                        </div>
                        <div className='username_name'>
                            <span className='name_name'>
                                {user?.profile.firstName} {user?.profile.lastName}
                            </span>
                            <span className='name_acc'>
                                {user?.accountNumber}

                            </span>
                        </div>
                    </div>
                    <div className='one_usertier'>
                        User's Tier
                        <div className='star_parent'>
                            <StarReview rating={1} />
                        </div>
                    </div>
                    <div className='one_account'>
                        <div className='account_bal'>
                            {user?.profile.currency} {user?.accountBalance}
                        </div>
                        <div className='account_bvn'>
                            {user?.profile.bvn}
                        </div>
                    </div>
                </div>
                <div className='summary_two'>
                    {
                        USER_DETAILS_VIEW_ARRAY.map(screen => (
                            <div key={screen} onClick={() => setActiveView({ screen: screen as keyof typeof UserDetailsView })} className={`${screen === ActiveView.screen && 'active_screen'} two_screens`}>
                                <span>{screen}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* user Details */}
            <div className="home_container_child child_details">
                <Component userDetails={user} />
            </div>

        </div>
    )
}

export default Home