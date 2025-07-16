import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Singleres from './comon/Singleres'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Recomandation = () => {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




const [product , setprodect] =useState([])

useEffect(()=>{

axios.get(' https://api.escuelajs.co/api/v1/products')
.then((res)=>{setprodect(res.data)})

.catch((error)=>{
})
} ,[])



console.log(product)

product.length = 4

return (
<>

  <section id='Recomandation' className='mt-[176px]'>

    <div className="container">
      <h2 className=' w-[881px]font-praymary lg:text-[36px] text-[24px] font-semibold text-second mb-[40px]'>
        Recommendations.
        <span className='font-praymary lg:text-[36px] font-semibold text-praymary  '> Best matching products for
          you</span>
      </h2>

        <Slider {...settings}>
      <div>
        <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
  {
    product.slice(0,4).map((item)=>(
   <Singleres pimage={item.category.image} pname={item.title} pprice={item.price}  pacce={item.slug}/>
    ))
  }
</div>
      </div>
      <div>
      <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
  {
    product.slice(0,4).map((item)=>(
   <Singleres pimage={item.category.image} pname={item.title} pprice={item.price}  pacce={item.slug}/>
    ))
  }
</div>
      </div>
      <div>
      <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
  {
    product.slice(0,4).map((item)=>(
   <Singleres pimage={item.category.image} pname={item.title} pprice={item.price}  pacce={item.slug}/>
    ))
  }
</div>
      </div>
      <div>
        <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
  {
    product.slice(0,4).map((item)=>(
   <Singleres pimage={item.category.image} pname={item.title} pprice={item.price}  pacce={item.slug}/>
    ))
  }
</div>
      </div>
      <div>
  <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
  {
    product.slice(0,4).map((item)=>(
   <Singleres pimage={item.category.image} pname={item.title} pprice={item.price}  pacce={item.slug}/>
    ))
  }
</div>
      </div>
      <div>
      <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
  {
    product.slice(0,4).map((item)=>(
   <Singleres pimage={item.category.image} pname={item.title} pprice={item.price}  pacce={item.slug}/>
    ))
  }
</div>
      </div>
    </Slider>



    


{/* <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
  {
    product.slice(0,4).map((item)=>(
   <Singleres pimage={item.category.image} pname={item.title} pprice={item.price}  pacce={item.slug}/>
    ))
  }
</div> */}


</div>


 
  </section>






</>
)
}

export default Recomandation