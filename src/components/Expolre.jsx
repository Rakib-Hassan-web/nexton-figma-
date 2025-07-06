import React from 'react'
import SingleExplore from './comon/SingleExplore'
import { Link } from 'react-router'
import { FaArrowRightLong } from 'react-icons/fa6'

const Expolre = () => {
return (
<>



    <section id='Explore ' className='mt-[88px] '>

        <div className="container ">
            <h2 className='font-praymary text-[36px] font-semibold text-second mb-[40px]'> Start exploring.
                <span className='font-praymary text-[36px] font-semibold text-praymary '> Good things are waiting for
                    you</span>
            </h2>

            <div className="EXPLORE  !flex justify-around !items-center">
                <div className='border  w-[419px] p-[40px] rounded-[16px] border-[#E5E7EB]'>


                    <SingleExplore exploreBigtext={"For Men's"} exploreSmalltxt={'Starting at $24'} explorebutton={
                        <Link className='font-praymary font-medium text-[14px] text-praymary'>Shop Now
                        <FaArrowRightLong className='text-xl' />
                        </Link>} />  
                </div>




                  <div className='border  w-[419px] p-[40px] rounded-[16px] border-[#E5E7EB]'>


                    <SingleExplore exploreBigtext={"For Men's"} exploreSmalltxt={'Starting at $24'} explorebutton={
                        <Link className='font-praymary font-medium text-[14px] text-praymary'>Shop Now
                        <FaArrowRightLong className='text-xl' />
                        </Link>} />  
                </div>



                  <div className='border  w-[419px] p-[40px] rounded-[16px] border-[#E5E7EB]'>


                    <SingleExplore exploreBigtext={"For Men's"} exploreSmalltxt={'Starting at $24'} explorebutton={
                        <Link className='font-praymary font-medium text-[14px] text-praymary'>Shop Now
                        <FaArrowRightLong className='text-xl' />
                        </Link>} />  
                </div>




                <div className='border  w-[419px] p-[40px] rounded-[16px] border-[#E5E7EB]'>


                    <SingleExplore exploreBigtext={"For Men's"} exploreSmalltxt={'Starting at $24'} explorebutton={
                        <Link className='font-praymary font-medium text-[14px] text-praymary'>Shop Now
                        <FaArrowRightLong className='text-xl' />
                        </Link>} />  
                </div>
            </div>

        </div>

    </section>







</>
)
}

export default Expolre