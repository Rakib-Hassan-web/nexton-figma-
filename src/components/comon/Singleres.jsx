import React from 'react'
import { HiStar } from 'react-icons/hi'

const Singleres = ( name , price , image ,rating ,acce, discount) => {
  return (
    <>
    
    
    
    
    <section id='recomandation'>

 <div className="container">
    

 <div  className='w-[320px] h-[448px]  rounded-[16px]'>

    <div className="recoimg w-full h-[360px] bg-amber-100 rounded-[16px]">
        <img src="" alt="product image" />
    </div>


    <div className="recoAllTxt">


<div className="reco1sttxtrow flex items-center justify-between mt-[20px]  ">
    <h2 className='font-praymary font-semibold text-second text-base'>Black Automatic Watch</h2>
    <h2 className='font-praymary font-semibold text-second text-base'>$169.99</h2>
</div>


<div className="reco2ndtxtrow flex items-center justify-between  ">
    <p className='text-[14px] font-normal font-praymary text-praymary'>Accessories</p>
    <p className='text-[14px] font-normal font-praymary text-praymary line-through'>$199.99</p>
</div>

<div className="rating flex gap-1 items-center mt-[15px]">
    <HiStar className='text-[#FBBF24] text-2xl' />
    <p className='text-[14px] font-normal font-praymary text-praymary'>4.9(98)</p>

</div>


    </div>





 </div>


 </div>



    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Singleres