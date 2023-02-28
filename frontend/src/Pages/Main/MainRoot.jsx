import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Companents/Main/Footer/Footer'
import Navbar from '../../Companents/Main/Navbar/Navbar'

const MainRoot = () => {
  return (
 <>
<Navbar/>
<Outlet/>
<Footer/>
 
 
 </>
  )
}

export default MainRoot