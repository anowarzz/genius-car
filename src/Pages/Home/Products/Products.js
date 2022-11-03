import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

const [ourProducts, setOurProducts] = useState([])



useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setOurProducts(data))
}, [])

    return (
        <div>
           <div className='text-center mb-14'>
           <p className='text-2xl font-bold text-brightRed'>Services</p>
           <h2 className='text-5xl font-semibold mt-5' >Browse Our Products </h2>
           <p className='p-6'>
           The majority have suffered alteration in some form, by injected humour <br /> or randomised words which don't look even slightly believable. 
        </p>
           </div>

           <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                ourProducts.map(product => <ProductCard key={product.product_id} 
                product={product} />)
            }
           </div>

           <div className='text-center mt-12 mb-32'>
                <button className='btn btn-outline border-brightRed text-brightRed hover:bg-brightRed hover:border-none'>
               More Products
                </button>
            </div>


        </div>
    );
};

export default Products;