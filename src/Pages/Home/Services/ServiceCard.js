import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const ServiceCard = ({service}) => {

const {img, price, title} = service

    return (
        <div className="card card-compact w-[95%] mx-auto md:w-full border border-gray-300 shadow-lg p-4">
        <figure><img src=
        {img} alt="img"/></figure>
        <div className="card-body">

          <h2 className="card-title text-2xl text-center"> {title}</h2>

          <div className='flex justify-center items-center'>
          <p className='text-brightRed text-xl font-bold'>Price : ${price}</p>
          <button className="btn btn-outline border-brightRed hover:bg-brightRed btn-sm hover:border-none">
            <p className='inline'>Get Service</p>
                <BsArrowRightCircle  className='text-xl ml-1 text-brightRed inline' />
               
            </button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;