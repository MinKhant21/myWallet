import React, { lazy, Suspense } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { LoadingSpinner } from './components/LoadingSpinner'
import Auth from './pages/Auth'
const LoginPage = lazy(()=>import ('./pages/Login'))
const DashboardPage = lazy(()=>import ('./pages/Dashboard'))

export default function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Auth/>,
      children: [
        {
          path:'/',
          element:<DashboardPage/>
        }
      ],
    },
    {
      path : '/login',
      element : <LoginPage/>
    }
  ])

  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <RouterProvider router={router} />
    </Suspense>
  )



}
