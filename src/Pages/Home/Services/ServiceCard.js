import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const ServiceCard = ({service}) => {

const {img, price, title} = service

    return (
        <div className="card card-compact w-[95%] mx-auto md:w-full border border-gray-300 shadow-lg p-4">
        <figure><img src=
        {img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-center"><span className='text-center'>{title}</span></h2>
          <div className='flex'>
          <p className='text-brightRed text-xl font-bold'>Price : ${price}</p>
          <button className="btn-sm">
             
                <BsArrowRightCircle  className='text-xl text-brightRed rounded-full hover:border hover:text-2xl' />
               
            </button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;