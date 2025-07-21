import React, { useEffect, useState } from 'react'
import Singleres from './comon/Singleres'
import axios from 'axios'

const AllProduct = () => {

    const [product , setprodect] =useState([])

useEffect(()=>{

axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{setprodect(res.data)})

.catch((error)=>{
})
} ,[])
  return (
    <>
    
     <div className=' lg:flex mt-4 lg:flex-wrap justify-between items-center '>
            {
            product.slice(0,12).map((item)=>(
            <Singleres  pimage={item.category.image} pname={item.title} pprice={item.price} pacce={item.slug}  />
            ))
            }
          </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default AllProduct