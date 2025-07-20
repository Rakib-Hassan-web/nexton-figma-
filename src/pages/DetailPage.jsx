import React from 'react'

const DetailPage = () => (
<>

    <section id='detail_page'>

        <div className='       border-[#E5E7EB]     mt-[4px] mb-[40px]  border-t-1'></div>
        <div className="container">
            {/* ------------left side menu---------- */}
            <div className="LeftSide w-[285px] h-screen">

                <div id='catagories' className=" mt-10">
                    <h1 className='font-praymary font-semibold text-second text-[18px] mb-6'>Categories</h1>
                    <h2 className='font-praymary font-normal text-praymary text-[14px] mb-4'>Men’s fashion</h2>
                    <h2 className='font-praymary font-normal text-praymary text-[14px] mb-4'>Women’s fashion</h2>
                    <h2 className='font-praymary font-normal text-praymary text-[14px] mb-4'>Kids & Toys</h2>
                    <h2 className='font-praymary font-normal text-praymary text-[14px] mb-4'>Accessories</h2>
                    <h2 className='font-praymary font-normal text-praymary text-[14px] mb-4'>Cosmetics</h2>
                    <h2 className='font-praymary font-normal text-praymary text-[14px] mb-4'>Shoes</h2>
                    <h2 className='font-praymary font-normal text-praymary text-[14px] '>Sports</h2>

                </div>

                <div className='       border-[#E5E7EB]     mb-[32px] mt-[40px]  border-t-1'></div>

                <div className="Prizerange ">

                    <h1 className='font-praymary font-semibold text-second text-[18px] mb-6'>Price range</h1>

                    <div className='line'>--------------------</div>

                    <div className="Prices flex items-center justify-between">

                        <div className="minPrice ">
                            <h2 className='font-praymary font-normal text-praymary text-[16px] mb-1 mt-8'>Min price</h2>
                            <div
                                className="borderMINprice w-[130px] border py-2 flex justify-around items-center  rounded-full  border-[#E5E7EB]">
                                <p className='font-praymary font-medium text-praymary text-[14px]'>100</p>
                                <p className='font-praymary font-medium text-praymary text-[14px]'>$</p>
                            </div>
                        </div>


                        <div className="MaxPrice ">
                            <h2 className='font-praymary font-normal text-praymary text-[16px] mb-1 mt-8'>Max price</h2>
                            <div
                                className="borderMINprice w-[130px] border py-2 flex justify-around items-center  rounded-full  border-[#E5E7EB]">
                                <p className='font-praymary font-medium text-praymary text-[14px]'>500</p>
                                <p className='font-praymary font-medium text-praymary text-[14px]'>$</p>
                            </div>
                        </div>




                    </div>

                </div>

        <div className='       border-[#E5E7EB]     mt-[40px]   border-t-1'></div>


  <div id='ORDER' className=" mt-8">
                    <h1 className='font-praymary font-semibold text-second text-[18px] mb-6'>Sort order</h1>
                    <h2 className='font-praymary font-normal text-praymary text-[14px] mb-4'>Most Popular</h2>
                    

                </div>





            </div>





        </div>
    </section>












</>
)

export default DetailPage