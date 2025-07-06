import React from 'react'
import Singleservice from './comon/Singleservice'
import { TbTruckDelivery } from 'react-icons/tb'

const Service = () => {
  return (
   <>
   
   <section id='service'  >
    <div className=''>
        <div className="serviceRow container border mt-[52px] py-6 border-[#E5E7EB] rounded-[16px] flex justify-around items-center">
            <Singleservice  servicebigtxt={'Free shipping'} serviceicon={  <TbTruckDelivery className='text-3xl' />} servicesmlltxt={'On orders over $50.00'}/>
            <span className=' w-[1px]  h-[50px] bg-[#E5E7EB] inline-block'></span>
            <Singleservice/>
            <span className=' w-[1px]  h-[50px] bg-[#E5E7EB] inline-block'></span>
            <Singleservice/>
            <span className=' w-[1px]  h-[50px] bg-[#E5E7EB] inline-block'></span>
            <Singleservice/>
            
        </div>
    </div>
   </section>
   
   
   
   </>
  )
}

export default Service