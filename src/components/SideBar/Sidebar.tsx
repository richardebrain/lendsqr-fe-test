import React from 'react'
import './sidebar.styles.scss'
import { IconArrowDown, IconDashboard, IconOrganisation, IconSignOut } from '../icons/icon'
import { sidebarRoutes } from '@/utils/constant'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAppContext } from '@/context/MainContext'

const Sidebar = () => {
    const [userIdPath, setUserIdPath] = React.useState(false)
    const { logout } = useAppContext()
    const { pathname } = useLocation()

    React.useEffect(() => {
        if (pathname.includes('users/')) {
            setUserIdPath(true)
        }
    }, [pathname])


    return (
        <div className='sidebar'>
            <div className='sidebar_head'>
                <IconOrganisation />
                Switch Organistaion
                <IconArrowDown />
            </div>
            <div className='sidebar_dashboard'>
                <div className='dashboard_secondary'>
                    <IconDashboard />
                    Dashboard
                </div>
                <div className='dashboard_primary'>
                    {/* title */}
                    {
                        sidebarRoutes.map((route, index) => (
                            <div key={index} className='dashboard_primary_main'>
                                <h5 className='dashboard_primary_title' key={index}>
                                    {route.title.toUpperCase()}
                                </h5>
                                <div className='main_container'>
                                    {/* children routes */}
                                    {
                                        route.routes.map((route, index) => (
                                            <Link key={index} className={`main_wrapper ${pathname.includes(route.path) && 'active'}`} to={route.path}>
                                                <div className='main_wrapper_icon'>
                                                    {<route.Icon />}
                                                </div>
                                                <div className='main_wrapper_name'>
                                                    {route.name}
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>

                            </div>


                        )
                        )
                    }
                    <div className='primary_user'>
                        <Link className={`signout `} to='/' onClick={() => logout}>
                            <IconSignOut />
                            Log Out
                        </Link>

                        <p>v1.2.0</p>
                    </div>



                </div>

            </div>
        </div>

    )
}

export default Sidebar