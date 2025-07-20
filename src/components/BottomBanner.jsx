import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router'
import bgextra from '../assets/image/bannerex.png'


const BottomBanner = () => {
return (
<>


    <section>
        <div className="container">
            <div id='bannerbg2'
                style={{background:`url(${bgextra})` ,backgroundRepeat:'no-repeat' ,backgroundSize:'cover' , backgroundPosition:'left'}}
                className=' py-[94px] pl-[120px]  rounded-[24px]'>
                <div className='container pl-[124px] lg:pl-0'>
                    <h1 className='text-praymary text-[14px] lg:text-[20px] font-praymary font-medium'>100% Original Products
                    </h1>
                    <h2
                        className='text-second lg:text-[36px] text-[30px] font-semibold font-praymary lg:w-[362px] w-[312px]  lg:mt-[14px]  mb-[24px]'>
                        The All New Fashion
                        Collection Items</h2>
                        <p className='text-[20px]'>Starting from: $59.99</p>

                    <Link to={'#'}
                        className='bg-second flex lg:gap-3 gap-2 rounded-full items-center text-white text-[14px] lg:text-[16px] font-medium font-praymary py-[12px] lg:py-[20px] lg:pl-[36px] pl-[24px] w-fit   lg:pr-[50px] pr-[19px] hover:scale-[1.1] duration-[.4s] '>
                    Explore now
                    <CiSearch className='lg:text-3xl text-2xl  ' />
                    </Link>
                </div>
            </div>
        </div>
    </section>


























</>
)
}

export default BottomBanner