import React from 'react'
import { Children } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../SideBar/Sidebar'
import './layout.styles.scss'


const Layout = () => {
    return (
        <div className='layout'>
            <header className='layout_header'> <Header /></header>
            <div className='layout_content'>
                <aside className='content_aside'> <Sidebar /></aside>
                <main><Outlet /></main>
            </div>
        </div>
    )
}

export default Layout