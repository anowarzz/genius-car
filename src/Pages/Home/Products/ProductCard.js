import React from 'react';

const ProductCard = ({product}) => {

const {title, img, ratings,price} = product;


    return (
        <div className="card card-compact w-[95%] mx-auto md:w-94 border border-gray-300 shadow-lg hover:border hover:border-brightRed ">
       <div className='w-3/4 h-48 mx-auto bg-gray-300 mt-10 rounded'>
       <figure><img src=
        {img} alt="product" className='p-4'/></figure>
       </div>


        <div className="card-body flex flex-col justify-center items-center">
            <img src={ratings} alt="" className='w-20' />
          <h2 className="card-title text-2xl text-center"><span className='text-center'>{title}</span></h2>
          <div className='flex'>
          <p className='text-brightRed text-xl font-bold'> ${price}</p>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;