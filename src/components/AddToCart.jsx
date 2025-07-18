import React from 'react'

const AddToCart = () => {
return (
<>


    <section>

        <div id='cartbg'></div>

        <div className='w-full h-screen bg-[#000000b5]  absolute top-0 left-0'>

            <div className='w-[500px] h-screen bg-white absolute top-0 right-0'>


                <h2 className='text-[25px] font-semibold font-praymary text-second p-4'>AddToCart</h2>

                <div className="allProuct  ">

                    <div className='flex  items-center justify-around '>
                        <div className="singleProduct flex gap-4 items-center">
                            <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                                {/* image asbe */}
                            </div>

                            <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                        </div>

                        <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                    </div>



                </div>

            </div>



        </div>









    </section>






</>
)
}

export default AddToCart