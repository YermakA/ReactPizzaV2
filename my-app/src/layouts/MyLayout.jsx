import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
export const MyLayout = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default MyLayout
