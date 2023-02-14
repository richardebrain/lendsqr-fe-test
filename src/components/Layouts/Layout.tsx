import { useAppContext } from '@/context/MainContext'
import React, { useEffect } from 'react'
import { Children } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../SideBar/Sidebar'
import './layout.styles.scss'


const Layout = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext()
    const screensize = window.innerWidth;
    useEffect(() => {
        setIsSidebarOpen(false)
    }, [])
    
    return (
        <div className='layout'>
            <header className='layout_header'> <Header /></header>
            <div className='layout_content'>
                {screensize > 425 ?
                    <aside className='content_aside'>
                        <Sidebar />
                    </aside>
                    : isSidebarOpen && <aside className='content_aside'>

                        <Sidebar />
                    </aside>
                }
                <main><Outlet /></main>
            </div>
        </div>
    )
}

export default Layout