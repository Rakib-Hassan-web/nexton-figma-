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


      <div className="navsearch w-[400px] h-[52px]  bg-[#F8F8F8] rounded-[100px] " id='navsearch'>

     <RiSearch2Line />
        <input className='navinp w-[full] p-[7px]' id='navinp' type="text" />


      </div>


      <div className="nav_icons"></div>

    </div>



  </div>





</>
)
}

export default Navbar