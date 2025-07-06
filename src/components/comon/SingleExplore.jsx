import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

const SingleExplore = ( {exploreBigtext,exploreSmalltxt,explorebutton}) => {
return (
<>


    <div className="exploreBigtextt text-second font-semibold font-praymary text-[24px]">
        {exploreBigtext}
    </div>

    <div className="exploreSmalltxtt   text-praymary font-normal font-praymary text-[14px] ">

    {exploreSmalltxt}
    </div>
     <span className='  lg:w-[3px]  lg:h-[36px] lg:bg-[#E5E7EB] lg:inline-block'></span>
    <div className="explorebuttonn">

        
        <Link className=''>Shop Now <FaArrowRightLong />
        </Link>
        {explorebutton}
    </div>





</>
)
}

export default SingleExplore