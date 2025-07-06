import React from 'react'

import { TbTruckDelivery } from "react-icons/tb";


const Singleservice = ( {serviceicon ,servicebigtxt,servicesmlltxt}) => {
  return (
    <>
    
    
    
    <div className="serviceBow flex  items-center  gap-[16px] ">
       {serviceicon}
 
   <div className="boxtxt">
    <h2 className='text-[18px] font-medium font-praymary text-second'>
        {servicebigtxt}</h2>
    <h2 className='text-praymary font-praymary  text-[14px] font-normal'>
        {servicesmlltxt}
    </h2>
   </div>

    </div>
    
    
    
    
    </>
  )
}

export default Singleservice