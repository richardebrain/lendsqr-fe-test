import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppWrapper } from './context/MainContext'
import { UserWrapper } from './context/userContext'
import ErrorPage from './pages/Error/ErrorPage'
import Layout from './components/Layouts/Layout'
import Home from './pages/Home/Home'
import SignInPage from './pages/Sign/SignInPage'
import Dashboard from './pages/Dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    
  },
  
        {
          element: <Layout />,
          errorElement: <ErrorPage />,
  
          children: [
            {
              path:'/users',
              element: <Dashboard />,
            },
            {
              path: '/users/:id',
              element: <Home />
            }
          ]
  
        }

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper>
      <UserWrapper>
        <RouterProvider router={router} />
      </UserWrapper>
    </AppWrapper>
  </React.StrictMode>,
)
