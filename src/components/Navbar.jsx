import React, { useState } from 'react'
import { Link } from 'react-router'

import { RiSearch2Line, RiShoppingCart2Line } from "react-icons/ri"
import logo from '../assets/image/logo.png'


import { RiUserLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import AddToCart from './AddToCart';
import { RxCross1 } from 'react-icons/rx';




const Navbar = () => {

// let handlecart =()=>{
// AddToCart.style= 'display:block'
// }

const [value , setValue] = useState(true)
const [cart , setCart] = useState(true)



return (
<>


  {/* ------------dark mood ar jonno dark:bg-black---------- */}
  <nav className='container py-[27px]  hidden lg:block  ' id='navbar'>


    <div className="nav_row flex justify-between items-center">

      <Link to={'/'} className="nav_LOGO w-[119px] " id='nav_LOGO'><img src={logo} alt="" /></Link>


      <div
        className="navsearch w-[400px] h-[52px]  bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px] "
        id='navsearch'>

        < RiSearch2Line className='text-2xl text-praymary  srach_icon' id='srach_icon' onClick={()=>setvalue(!value)} />
          <input className='navinp w-full border-none outline-none text-[14px] font-normal text-praymary font-praymary '
            placeholder='Search in products... ' id='navinp' type="text" />

      </div>


      <div className="nav_icons relative " id='nav_icons'>

        <button className='user_icon text-2xl text-praymary  mr-[22px]' id='user_icon'>
          <RiUserLine /></button>

  <button onClick={()=>setCart(!cart)} className='relative cursor-pointer'>
              <RiShoppingCart2Line className='text-[24px] text-Primary'/>
              <div className='absolute right-[-7px] top-[-7px] bg-[#0EA5E9] h-[20px] w-[20px] flex items-center justify-center rounded-full text-[#fff] text-[12px]'>3</div>
            </button>



      </div>
  {/* <section className={`fixed top-0 z-50 h-full w-full duration-[.3s] right-0 flex justify-end ${cart? 'hidden' : 'visible'}` }>
          <div onClick={()=>setCart(!cart)} className='fixed top-0 left-0 z-0 h-full w-full  bg-[#00000063]'></div>
          <AddToCart Crosss={<RxCross1 onClick={()=>setCart(!cart)} className='text-3xl'/>}/>
        </section> */}











    </div>



  </nav>





</>
)
}

export default Navbar