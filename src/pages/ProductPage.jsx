import React from 'react'
import slidingimg1 from '../assets/image/product-27-1 (4) 1 (1).png'
import slidingimg2 from '../assets/image/product-27-2 1.png'
import slidingimg3 from '../assets/image/product-27-3 1.png'
import slidingimg4 from '../assets/image/product-27-4 1.png'
import Mainimg from '../assets/image/image-showing.png'
import { HiMiniStar } from 'react-icons/hi2'

const ProductPage = () => {
  return (
    <>
    

    <section id='productPage'>
                <div className='       border-[#E5E7EB]     mb-[40px]  border-t-1'></div>

     <div className="container">
          <div className="main flex gap-8">

                     <div className="sliding_img flex flex-col gap-4 w-[140px]">
            
           <img className='img1' src={slidingimg1} alt="slidingimg" />
           <img className='img2' src={slidingimg2} alt="slidingimg" />
           <img className='img3' src={slidingimg3} alt="slidingimg" />
           <img className='img4' src={slidingimg4} alt="slidingimg" />


                        </div>


                <div className="mainIMG w-[640px]">
                    <img className='w-full' src={Mainimg}  alt="mainIMG" />
                </div>

           <div className="InfoBorder w-[460px] h-[463px] border-[#E5E7EB] border-1 p-[33px] rounded-[16px]">
               
               <div className='firstRow flex  justify-between mb-8 '>
                      
                       <div className='flex gap-1'>
                <HiMiniStar className='text-[#FBBF24] text-xl'  />
                <p className='text-base text-praymary font-praymary font-semibold'>4.9 · </p>
                <p className=' underline text-base text-praymary font-praymary font-medium'>142 reviews</p>
                      </div>
            
             <div>
                <h2 className=' font-praymary font-semibold text-[24px] text-second'>$169.99</h2>
                <h3 className=' font-praymary font-medium text-[14px] text-praymary line-through'>$199.99</h3>
             </div>


               </div>
 
         <div className="SEcondRow">
            <h2 className='text-base text-second font-praymary font-semibold'>Size: 
                <span className='text-base text-second font-praymary font-semibold'> S</span>
            </h2>
            <div className="Sizes flex gap-2 mt-3">

           <div className="SmallSize  border border-[#E5E7EB] py-[10px] px-[30px] w-fit rounded-[12px]  cursor-pointer"><h2 className='text-base text-praymary font-praymary font-semibold'>S</h2></div>
           <div className="SmallSize border border-[#E5E7EB] py-[10px] px-[30px] w-fit rounded-[12px]  cursor-pointer"><h2 className='text-base text-praymary font-praymary font-semibold'>M</h2></div>
           <div className="SmallSize border border-[#E5E7EB] py-[10px] px-[30px] w-fit rounded-[12px]  cursor-pointer"><h2 className='text-base text-praymary font-praymary font-semibold'>L</h2></div>
           <div className="SmallSize border border-[#E5E7EB] py-[10px] px-[28px] w-fit rounded-[12px]  cursor-pointer"><h2 className='text-base text-praymary font-praymary font-semibold'>XL</h2></div>
           <div className="SmallSize border border-[#E5E7EB] py-[10px] px-[27px] w-fit rounded-[12px]  cursor-pointer"><h2 className='text-base text-praymary font-praymary font-semibold'>2XL</h2></div>




            </div> 
         </div>

              
           </div>









          </div>
       
     </div>
    








    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ProductPage