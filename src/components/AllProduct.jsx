import React, { useEffect, useState } from 'react'
import Singleres from './comon/Singleres'
import axios from 'axios'
import Pagination from './Pagination';

const AllProduct = () => {

const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);
const itemsPerPage = 6;

useEffect(() => {
axios
.get("https://api.escuelajs.co/api/v1/products")
.then((res) => {
setProducts(res.data);
})
.catch((err) => {
console.log(err);
});
}, []);

const start = (page - 1) * itemsPerPage;
const currentItems = products.slice(start, start + itemsPerPage);
const totalPages = Math.ceil(products.length / itemsPerPage);
return (
<>
    <div className='flex items-end flex-wrap justify-end'>
        <div className=' lg:flex mt-4 lg:flex-wrap justify-between items-center '>
            {
            currentItems.slice(0,10).map((item)=>(
            <Singleres className={'overflow-ellipsis'} pimage={item.category.image} pname={item.category.slug}
                pprice={item.price} pacce={item.title } />
            ))
            }
        </div>
            <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />


    </div>

</>
)
}

export default AllProduct