import React from 'react'
import { Link } from 'react-router'

import { RiSearch2Line } from "react-icons/ri" 
import logo from '../assets/image/logo.png'



const Navbar = () => {
return (
<>

  <div className='container py-[27px]  ' id='navbar'>


    <div className="nav_row flex justify-between items-center">

      <Link className="nav_LOGO w-[119px] " id='nav_LOGO'><img src={logo} alt="" /></Link>


      <div className="navsearch w-[400px] h-[52px]  bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px] " id='navsearch'>

     <  RiSearch2Line className='text-2xl text-praymary ' />
        <input className='navinp w-full border-none outline-none text-[14px] font-normal text-praymary font-praymary ' placeholder='Search in products... ' id='navinp' type="text" />


      </div>


      <div className="nav_icons"></div>

    </div>



  </div>





</>
)
}

export default Navbar