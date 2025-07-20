import React from 'react'

import footerlogo from '../assets/image/logo.png'
import { FaFacebook } from 'react-icons/fa6'
import { Link } from 'react-router'
import { TbBrandYoutubeFilled } from 'react-icons/tb'

const Footer = () => {
return (
<>





    <section>

        <div className='       border-[#E5E7EB]     mt-[54px] mb-[60px]  border-t-1'></div>


        <div className="container">

            <div className="allItems">

                <div className="first_col">
                    <img src={footerlogo} alt="FooterLOGO" className='w-[119px]' />
                    {/* -----------------Facebook--------------------- */}
                    <div className=' mt-5 mb-3'>
                        <Link to={'#'} className='  flex items-center gap-2'>
                        <FaFacebook className='text-[#4676ED] text-3xl ' />
                        <h2>Facebook</h2>
                        </Link>
                    </div>
                    {/* --------------Youtube------------------ */}
                    <div className=' mt-5 mb-3'>
                        <Link to={'#'} className='  flex items-center gap-2'>
                        <TbBrandYoutubeFilled className='text-[#DA0000] text-3xl  ' />
                        <h2>Youtube</h2>
                        </Link>
                    </div>
                    {/* --------------Telegram------------------ */}
                    <div className=' mt-5 mb-3'>
                        <Link to={'#'} className='  flex items-center gap-2'>
                        <FaFacebook className='text-[#4676ED] text-3xl ' />
                        <h2>Telegram</h2>
                        </Link>
                    </div>
                    {/* --------------Twitter------------------ */}
                    <div className=' mt-5 '>
                        <Link to={'#'} className='  flex items-center gap-2'>
                        <FaFacebook className='text-[#4676ED] text-3xl ' />
                        <h2>Facebook</h2>
                        </Link>
                    </div>



                </div>













            </div>



        </div>



        <div className='       border-[#E5E7EB]     mt-[54px] mb-[60px]  border-t-1'></div>








    </section>








</>
)
}

export default Footer