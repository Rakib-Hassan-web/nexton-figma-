import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import ResNavbar from '../components/ResNavbar'
import Banner from '../components/Banner'
import ResExpolre from '../components/ResExpolre'

const LayoutOne = () => {
return (
<>


    <Navbar />


<ResNavbar/>


    <Outlet />
    <ResExpolre/>
</>
)
}

export default LayoutOne