import React from 'react'
import slidingimg1 from '../assets/image/product-27-1 (4) 1 (1).png'
import slidingimg2 from '../assets/image/product-27-2 1.png'
import slidingimg3 from '../assets/image/product-27-3 1.png'
import slidingimg4 from '../assets/image/product-27-4 1.png'
import Mainimg from '../assets/image/image-showing.png'

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

           









          </div>
       
     </div>
    








    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ProductPage