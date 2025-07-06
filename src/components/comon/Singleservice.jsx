import React from 'react'

import { TbTruckDelivery } from "react-icons/tb";


const Singleservice = () => {
  return (
    <>
    
    
    
    <div className="serviceBow flex  items-center  gap-[16px] ">
       
   <TbTruckDelivery className='text-3xl'/>
   <div className="boxtxt">
    <h2 className='text-[18px] font-medium font-praymary text-second'>Free shipping</h2>
    <h2 className='text-praymary font-praymary  text-[14px] font-normal'>On orders over $50.00</h2>
   </div>

    </div>
    
    
    
    
    </>
  )
}

export default Singleservice