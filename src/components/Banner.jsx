import React from 'react'
import bannerimg from '../assets/image/bannerimg.png'
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <>
    
    <section id='banner ' style={{background: `url(${bannerimg})` ,backgroundRepeat:'no-repeat' ,backgroundSize:'cover' , backgroundPosition:'left'}} className='w-full  lg:pt-[148px] lg:pb-[168px] pt-[163px] pb-[199px] mt-[10px] lg:mt-0 '>

<div className='container pl-[24px] lg:pl-0'>
<h1 className='text-praymary text-[14px] lg:text-[20px] font-praymary font-medium'>Starting from: $49.99</h1>

        </div>
    </section>
    </>
  )
}

export default Banner