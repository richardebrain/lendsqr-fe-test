import React from 'react'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import CustomSearch from '@/components/CustomSearch/CustomSearch'
import { Link } from 'react-router-dom'
import { ReactComponent as Bell } from '../../assets/bell.svg'
import { ReactComponent as Search } from '../../assets/search.svg'


const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <Link to='/' >
                    <Logo />
                </Link>
                <CustomSearch Icon={Search} />
            </div>
            <div className='header_right'>
                <Link to='docs' >Docs</Link>
                <Bell />
                {/* user */}
                <div>

                </div>

            </div>

        </div>
    )
}

export default Header