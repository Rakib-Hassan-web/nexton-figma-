import React from 'react'
import { Link } from 'react-router'

const AddToCart = () => {
return (
<>


    <section>

        <div id='cartbg'></div>

        <div className='w-full h-screen bg-[#000000b5]  absolute top-0 left-0'>

            <div className='w-[500px] h-screen bg-white absolute top-0 right-0'>


                <h2 className='text-[25px] font-semibold font-praymary text-second p-4'>AddToCart</h2>

                <div className="allProuct  ">
                    {/* -----------single product---------- */}
                    <div className='flex  items-center justify-around  mt-15'>
                        <div className="singleProduct flex gap-4 items-center">
                            <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                                {/* image asbe */}
                            </div>

                            <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                        </div>

                        <div className="product_price text-md text-second font-medium font-praymary ">20$</div>

                    </div>
                    {/* -----------single product---------- */}

                    <div className='flex  items-center justify-around  mt-6'>
                        <div className="singleProduct flex gap-4 items-center">
                            <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                                {/* image asbe */}
                            </div>

                            <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                        </div>

                        <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                    </div>

                    {/* -----------single product---------- */}

                    <div className='flex  items-center justify-around  mt-6'>
                        <div className="singleProduct flex gap-4 items-center">
                            <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                                {/* image asbe */}
                            </div>

                            <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                        </div>

                        <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                    </div>
                    {/* -----------single product---------- */}

                    <div className='flex  items-center justify-around  mt-6'>
                        <div className="singleProduct flex gap-4 items-center">
                            <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                                {/* image asbe */}
                            </div>

                            <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                        </div>

                        <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                    </div>
                    {/* -----------single product---------- */}

                    <div className='flex  items-center justify-around  mt-6'>
                        <div className="singleProduct flex gap-4 items-center">
                            <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                                {/* image asbe */}
                            </div>

                            <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                        </div>

                        <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                    </div>
                    {/* -----------single product---------- */}

                    <div className='flex  items-center justify-around  mt-6'>
                        <div className="singleProduct flex gap-4 items-center">
                            <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                                {/* image asbe */}
                            </div>

                            <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                        </div>

                        <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                    </div>
                    {/* -----------single product---------- */}

                    <div className='flex  items-center justify-around  mt-6'>
                        <div className="singleProduct flex gap-4 items-center">
                            <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                                {/* image asbe */}
                            </div>

                            <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                        </div>

                        <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                    </div>
                    {/* -----------single product---------- */}

                    <div className='flex  items-center justify-around  mt-6'>
                        <div className="singleProduct flex gap-4 items-center">
                            <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                                {/* image asbe */}
                            </div>

                            <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                        </div>

                        <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                    </div>

                    {/* -----------total_price------- */}
                    <div className="totalPrice flex items-center justify-around mt-23">
                    <h2 className='product_price text-[23px] text-second font-medium font-praymary'>Total Price :</h2>
                    <h2 className='product_price text-[20px] text-second font-medium font-praymary'>160$</h2>

                    </div>
                    {/* ------------check out button---------- */}
                    <Link
                        className='w-full text-center bg-black mt-[10px] inline-block py-4 text-2xl text-white font-praymary font-semibold'>
                    Check Out</Link>
                </div>


            </div>



        </div>









    </section>






</>
)
}

export default AddToCart