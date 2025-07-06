import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

const SingleExplore = ( {exploreBigtext,exploreSmalltxt,explorebutton}) => {
return (
<>

    <div className="exploreROW flex justify-between items-center">
        <div className="exploreBigtextt text-second font-semibold font-praymary text-[24px]">
            {exploreBigtext}
        <div className="exploreSmalltxtt   text-praymary font-normal font-praymary text-[14px] ">

            {exploreSmalltxt}
        </div>
        </div>

        <div className="explorebuttonn flex justify-between items-center gap-4">
        <span className='  lg:w-[3px]  lg:h-[40px] lg:bg-[#E5E7EB] lg:inline-block'></span>


          
            {explorebutton}
        </div>

    </div>



</>
)
}

export default SingleExplore