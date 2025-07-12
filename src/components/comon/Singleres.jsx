import React from 'react'
import { HiStar } from 'react-icons/hi'

const Singleres = ({ pname , pprice , pimage ,prating , pacce , pdiscount }) => {
  return (
    <>
    
    
    
    
    <section id='recomandation'>

 <div className="container">
    

 <div  className='w-[320px] h-[448px]  rounded-[16px]'>

    <div className="recoimg w-full h-[360px]  rounded-[16px] overflow-hidden">
        <img src={pimage} alt="product image" />
    </div>


    <div className="recoAllTxt">


<div className="reco1sttxtrow flex items-center justify-between   ">
    <h2 className='font-praymary font-semibold text-second text-base'>{pname}</h2>
    <h2 className='font-praymary font-semibold text-second text-base'>${pprice}</h2>
</div>


<div className="reco2ndtxtrow flex items-center justify-between  ">
    <p className='text-[14px] font-normal font-praymary text-praymary'>{pacce}</p>
    <p className='text-[14px] font-normal font-praymary text-praymary line-through'>{pdiscount}</p>
</div>

<div className="rating flex gap-1 items-center mt-[15px]">
    <HiStar className='text-[#FBBF24] text-2xl' />
    <p className='text-[14px] font-normal font-praymary text-praymary'>{prating}</p>

</div>


    </div>





 </div>


 </div>



    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Singleres