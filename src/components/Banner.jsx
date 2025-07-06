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
<h2 className='text-second lg:text-[64px] text-[30px] font-semibold font-praymary lg:w-[632px] w-[312px] leading-[38px] lg:leading-[72px] lg:my-[24px]  mt-[8px] mb-[30px]'>Exclusive collection
for everyone</h2>


<Link   to={'#'} className='bg-second flex lg:gap-3 gap-2 rounded-full items-center text-white text-[14px] lg:text-[16px] font-medium font-praymary py-[12px] lg:py-[20px] lg:pl-[36px] pl-[24px] w-fit   lg:pr-[50px] pr-[19px] '> Explore now  <CiSearch className='lg:text-3xl text-2xl  '/> </Link>
        </div>
    </section>
    </>
  )
}

export default Banner