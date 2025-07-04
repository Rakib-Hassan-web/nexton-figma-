import React from 'react'

import reslogo from '../assets/image/reslogo.png'
import { Link } from 'react-router'

const ResNavbar = () => {
return (
<>



    <nav className='container'>



        <div className="nav_row">

          <Link to={'/'}> <img src={reslogo} alt="" /></Link>


        </div>










    </nav>








</>
)
}

export default ResNavbar