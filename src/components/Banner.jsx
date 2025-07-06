import React from 'react'
import bannerimg from '../assets/image/bannerimg.png'
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <>
    
    <section id='banner ' style={{background: `url(${bannerimg})` ,backgroundRepeat:'no-repeat' ,backgroundSize:'cover' , backgroundPosition:'left'}} className='w-full  lg:pt-[148px] lg:pb-[168px] pt-[163px] pb-[199px] mt-[10px] lg:mt-0 '>

    </section>
    </>
  )
}

export default Banner