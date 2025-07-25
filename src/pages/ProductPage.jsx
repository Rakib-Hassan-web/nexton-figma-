import React, { useEffect, useState } from 'react';
import slidingimg1 from '../assets/image/product-27-1 (4) 1 (1).png';
import slidingimg2 from '../assets/image/product-27-2 1.png';
import slidingimg3 from '../assets/image/product-27-3 1.png';
import slidingimg4 from '../assets/image/product-27-4 1.png';
import slidingimg5 from '../assets/image/image-showing.png'; // your main image
import { Link, useParams } from 'react-router';
import { BsStars } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { HiMiniStar } from 'react-icons/hi2';
import axios from 'axios';

const ProductImageSlider = () => {
const images = [slidingimg1, slidingimg2, slidingimg3, slidingimg4, ];
const [selectedImg, setSelectedImg] = useState(images[0]);



const [product , setprodect] =useState([])

const perams =useParams()

console.log(product)

useEffect(()=>{

axios.get(`https://api.escuelajs.co/api/v1/products/${perams.ProductID}`)
.then((res)=>{setprodect(res.data)})

.catch((error)=>{
})
} ,[])

return (
<>


<section id='PRODUCT_PAGE mt-10'>
                <div className='       border-[#E5E7EB]     mb-[42px] mt-[0px]  border-t-1'></div>

<div className="container">
    <div className='flex gap-20'>





        <div className="flex items-center gap-15">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4 w-[140px]">
                {images.map((img, index) => (
                <img key={index} src={img} alt={`thumb-${index}`} className={`cursor-pointer rounded-md border ${
                    selectedImg===img ? 'border-blue-500' : 'border-transparent' }`} onClick={()=> setSelectedImg(img)}
                />
                ))}
            </div>

            {/* Main Image */}
            <div className="w-[640px]">
                <img src={selectedImg} alt="Selected" className="w-full rounded-lg shadow" />
            </div>
        </div>


        <div>
            <div className="InfoBorder w-[460px] h-[463px] border-[#E5E7EB] border-1 p-[33px] rounded-[16px]">

                <div className='firstRow flex  justify-between mb-8 '>

                    <div className='flex gap-1'>
                        <HiMiniStar className='text-[#FBBF24] text-xl' />
                        <p className='text-base text-praymary font-praymary font-semibold'>4.9 · </p>
                        <p className=' underline text-base text-praymary font-praymary font-medium'>142 reviews</p>
                    </div>

                    <div>
                        <h2 className=' font-praymary font-semibold text-[24px] text-second'>{product.price}$</h2>
                        {/* <h3 className=' font-praymary font-medium text-[14px] text-praymary line-through'>$199.99
                        </h3> */}
                    </div>


                </div>

                <div className="SEcondRow mb-8">
                    <h2 className='text-base text-second font-praymary font-semibold'>Size:
                        <span className='text-base text-second font-praymary font-semibold'> S</span>
                    </h2>
                    <div className="Sizes flex gap-2 mt-3">

                        <div
                            className="SmallSize  border border-[#E5E7EB] py-[10px] px-[30px] w-fit rounded-[12px]  cursor-pointer hover:bg-[#0EA5E9]   duration-[.4s] text-base text-praymary font-praymary font-semibold     hover:text-white ">
                            <h2>S</h2>
                        </div>
                        <div
                            className="SmallSize border border-[#E5E7EB] py-[10px] px-[30px] w-fit rounded-[12px]  cursor-pointer hover:bg-[#0EA5E9]   duration-[.4s] text-base text-praymary font-praymary font-semibold     hover:text-white ">
                            <h2>M</h2>
                        </div>
                        <div
                            className="SmallSize border border-[#E5E7EB] py-[10px] px-[30px] w-fit rounded-[12px]  cursor-pointer hover:bg-[#0EA5E9]   duration-[.4s] text-base text-praymary font-praymary font-semibold     hover:text-white ">
                            <h2>L</h2>
                        </div>
                        <div
                            className="SmallSize border border-[#E5E7EB] py-[10px] px-[28px] w-fit rounded-[12px]  cursor-pointer hover:bg-[#0EA5E9]   duration-[.4s] text-base text-praymary font-praymary font-semibold     hover:text-white ">
                            <h2>XL</h2>
                        </div>
                        <div
                            className="SmallSize border border-[#E5E7EB] py-[10px] px-[27px] w-fit rounded-[12px]  cursor-pointer hover:bg-[#0EA5E9]   duration-[.4s] text-base text-praymary font-praymary font-semibold     hover:text-white ">
                            <h2>2XL</h2>
                        </div>




                    </div>
                </div>

                <div className="thirdRo flex items-center justify-between">

                    <div
                        className="quentityBg w-[110px] bg-[#F8F8F8] rounded-full py-2 px-3 flex justify-between items-center ">
                        <span
                            className='bg-[#fff] w-[24px] h-[24px] rounded-full border border-[#E5E7EB] text-3xl flex justify-center items-center text-praymary  cursor-pointer '>
                            <p className='mb-2'>-</p>
                        </span>
                        <h2 className='text-base text-praymary font-praymary font-medium'>1</h2>
                        <span
                            className='bg-[#fff] w-[24px] h-[24px] rounded-full border border-[#E5E7EB] text-2xl  flex justify-center items-center text-praymary  cursor-pointer font-praymary '>+</span>
                    </div>


                    <Link
                        className="curtButton bg-second rounded-full w-fit py-4 px-8 flex  items-center gap-2 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] hover:scale-[1.2] duration-[.4s] hover:shadow-[0px_0px_40px_0px_rgba(138,_43,_226,_0.4)]">
                    <HiOutlineShoppingBag className='text-white font-semibold text-xl' />
                    <h2 className='text-base font-medium font-praymary text-white'>Add to cart</h2>

                    </Link>


                </div>


                <div className="FourthRow mt-8">

                    <div className='1st flex items-center justify-between'>
                        <h2 className='text-base font-normal font-praymary text-praymary'>$169.99 x 1</h2>
                        <h2 className='text-base font-normal font-praymary text-praymary'>$169.99</h2>
                    </div>

                    <div className='2nd mt-[10px] flex items-center justify-between'>
                        <h2 className='text-base font-normal font-praymary text-praymary'>Tax estimate</h2>
                        <h2 className='text-base font-normal font-praymary text-praymary'>$0</h2>
                    </div>


                </div>

                <div className='       border-[#E5E7EB]     my-[16px]  border-t-1'></div>
                <div className="5thRow flex items-center justify-between">
                    <h2 className='font-semibold font-praymary text-second text-base'>Total</h2>
                    <h2 className='font-semibold font-praymary text-second text-base'>$169.99</h2>
                </div>

            </div>



        </div>





    </div>

    <div className='   w-[804px]     border-[#E5E7EB]     my-[54px]  border-t-1'></div>

    <div className="infotext1">
        <h2 className='text-[36px] text-second font-semibold font-praymary mb-1'>{product.title}</h2>
        <p className='w-[735px] text-base text-praymary font-praymary font-normal'>{product.description}</p>
    </div>

    <div className="fabric mt-[60px]">
        <h2 className='text-[24px] text-second font-semibold font-praymary mb-1'>Fabric + Care</h2>
        <p className='w-[735px] text-base text-praymary font-praymary font-normal'>Material: Soft wool blend</p>
        <p className='w-[735px] text-base text-praymary font-praymary font-normal'>Color: Various</p>
    </div>


    <div className="sale mt-[60px]">
        <h2 className='text-[24px] text-second font-semibold font-praymary mb-1'>Sale performance</h2>
        <p className='w-[735px] text-base text-praymary font-praymary font-normal'>Sales: 0</p>
        <p className='w-[735px] text-base text-praymary font-praymary font-normal'>Review Count: - </p>
        <p className='w-[735px] text-base text-praymary font-praymary font-normal'>Review Average: -</p>
    </div>


    <div className='mb-50'>
        <h2 className='text-[36px] text-second font-semibold mt-[60px] mb-2'>Keywords</h2>
        <div className='flex items-center gap-2'>
            <Link to={'/'}
                className='text-[12px] font-normal text-praymary flex items-center gap-1 py-2 px-[14px] border-1 border-[#E5E7EB] w-fit rounded-full'>
            <BsStars className='text-lg' />men's fashion</Link>
            <Link to={'/'}
                className='text-[12px] font-normal text-praymary flex items-center gap-1 py-2 px-[14px] border-1 border-[#E5E7EB] w-fit rounded-full'>
            <BsStars className='text-lg' />winter hat</Link>
            <Link to={'/'}
                className='text-[12px] font-normal text-praymary flex items-center gap-1 py-2 px-[14px] border-1 border-[#E5E7EB] w-fit rounded-full'>
            <BsStars className='text-lg' />colorful accessory</Link>
            <Link to={'/'}
                className='text-[12px] font-normal text-praymary flex items-center gap-1 py-2 px-[14px] border-1 border-[#E5E7EB] w-fit rounded-full'>
            <BsStars className='text-lg' />warm headwear</Link>
        </div>
    </div>

</div>


</section>


</>
);
};

export default ProductImageSlider;