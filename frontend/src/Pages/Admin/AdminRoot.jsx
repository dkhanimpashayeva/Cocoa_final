import React from 'react'
import Navbar from '../../Companents/Admin/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../../Companents/Admin/Footer/Footer'
const AdminRoot = () => {
  return (
<>
<Navbar/>
<Outlet/>
<Footer/>
</>
  )
}

export default AdminRoot