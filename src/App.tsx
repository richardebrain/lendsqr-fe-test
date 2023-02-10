import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from '@pages/Home/Home'
import SignInPage from './pages/Sign/SignInPage'
import Layout from './components/Layouts/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<Dashboard />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
