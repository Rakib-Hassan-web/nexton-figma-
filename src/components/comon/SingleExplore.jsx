import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

const SingleExplore = ( {exploreBigtext,exploreSmalltxt,explorebutton}) => {
return (
<>

    <div className="exploreROW w-full lg:flex lg:justify-between lg:items-center px-[10px] ">
        <div className="exploreBigtextt  text-second font-semibold font-praymary text-[20px] lg:text-[24px]   ">
            {exploreBigtext}
            <div className="exploreSmalltxtt   text-praymary font-normal font-praymary text-[14px] ">

                {exploreSmalltxt}
            </div>
        </div>



        <div className="meia flex ">
            <div className="explorebuttonn w-[113px] flex items-center lg:gap-2 ">



                <span className='  lg:w-[3px]  lg:h-[40px] lg:bg-[#E5E7EB] lg:inline-block'></span>
                {explorebutton}
            </div>
        </div>
    </div>



</>
)
}

export default SingleExplore