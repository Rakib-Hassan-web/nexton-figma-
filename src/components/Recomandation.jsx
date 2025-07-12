import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Recomandation = () => {

const [product , setprodect] =useState([])





useEffect(()=>{

axios.get(' https://api.escuelajs.co/api/v1/products')
.then((res)=>{console.log(res.data)})

.catch((error)=>{
})
} ,[])

console.log(product)


return (
<>

  <section id='Recomandation' className='mt-[176px]'>

    <div className="container">
      <h2 className=' w-[881px]font-praymary lg:text-[36px] text-[24px] font-semibold text-second mb-[40px]'>
        Recommendations.
        <span className='font-praymary lg:text-[36px] font-semibold text-praymary  '> Best matching products for
          you</span>
      </h2>





    </div>
  </section>






</>
)
}

export default Recomandation