import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Singleres from './comon/Singleres'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router';


const Recomandation = () => {

var settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 4,
slidesToScroll: 1,
};




const [product , setprodect] =useState([])

useEffect(()=>{

axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{setprodect(res.data)})

.catch((error)=>{
})
} ,[])


product.length=1



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
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
       


       <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,3).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div>
      </Slider>


      <div className='  mt-15'>
        <Link to={'/DetailPage'}
          className=' m-auto text-center  py-4 px-10 bg-black text-base text-white font-praymary font-medium flex justify-center items-center w-fit rounded-[20px] '>
        See All</Link>
        <h2>hi</h2>
      </div>
    </div>



  </section>






</>
)
}

export default Recomandation