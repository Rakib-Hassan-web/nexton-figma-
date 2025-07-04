import React from 'react'
import { Link } from 'react-router'

import logo from '../assets/image/logo.png'

const Navbar = () => {
  return (
    <>
    
    <div className='container py-[27px] ' id='navbar'>


      <div className="nav_row">

     <Link className="nav_LOGO"><img src={logo} alt="" /></Link>


<div className="navInput"></div>


<div className="nav_icons"></div>

      </div>



    </div>
     
    
    
    
    
    </>
  )
}

export default Navbar