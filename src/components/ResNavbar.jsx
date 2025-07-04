import React from 'react'

import reslogo from '../assets/image/reslogo.png'
import { Link } from 'react-router'
import { RiSearch2Line } from "react-icons/ri"


const ResNavbar = () => {
return (
<>



    <nav className='container  lg:hidden'>



        <div className="nav_row flex justify-between items-center ">

            <Link to={'/'} className='reslogo'> <img className='w-[24px] h-[24px]' src={reslogo} alt="" /></Link>


            <div className="ressearch w-[400px] h-[52px]  bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px] "
                id='ressearch'>

                < RiSearch2Line className='text-2xl text-praymary  srach_icon-res' id='srach_icon-res' />
                <input
                    className='navinpRes w-full border-none outline-none text-[14px] font-normal text-praymary font-praymary '
                    placeholder='Search in products... ' id='navinpRes' type="text" />

            </div>


<div></div>


        </div>










    </nav>








</>
)
}

export default ResNavbar