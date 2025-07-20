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

                   <div className="Prices">

                 <div className="minPrice ">
                    <h2>Min price</h2>
                    <div className="borderMINprice w-[130px] border py-2 flex ju">
                        <p>100</p>
                        $
                    </div>
                 </div>


                   </div>

                </div>







</div>





            </div>
        </section>












    </>
)

export default DetailPage