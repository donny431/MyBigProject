import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function LayOut() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
