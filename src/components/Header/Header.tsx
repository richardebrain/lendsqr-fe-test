import React from 'react'
import './header.styles.scss'
import CustomSearch from '@/components/forms/CustomSearch/CustomSearch'
import { Link } from 'react-router-dom'
import { IconBell, IconDown, IconLogo, IconSearch } from '../icons/icon'
import ProfileImg from '@assets/user-profile.png'
import { useAppContext } from '@/context/MainContext'


const Header = () => {
    const { adminLogin } = useAppContext()
    return (
        <div className='header'>
            <div className='header_logo'>
                <Link to='/users' >
                    <IconLogo />
                </Link>
                <CustomSearch Icon={IconSearch} />
            </div>
            <div className='header_right'>
                <Link to='docs' className='right_docs'>Docs</Link>
                <IconBell className='icon' />
                {/* user */}
                <div className='right_profile'>
                    <div className='profile_img'>
                        <img src={ProfileImg} />
                    </div>
                    <div className='profile_name'>
                        <p>{adminLogin.email}</p>
                        <IconDown />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Header