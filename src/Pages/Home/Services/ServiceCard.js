import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

const {_id, img, price, title} = service;

    return (
        <div className="card card-compact w-[95%] mx-auto md:w-full border border-gray-300 shadow-lg p-4">
        <figure><img src=
        {img} alt="img"/></figure>
        <div className="card-body">

          <h2 className="card-title text-2xl text-center"> {title}</h2>

          <div className='flex justify-center items-center'>
          <p className='text-brightRed text-xl font-bold'>Price : ${price}</p>

         <Link to={`/checkout/${_id}`} >
         <button className="btn btn-outline border-brightRed hover:bg-brightRed btn-sm hover:border-none">
            <p className='inline'>Get Service</p>
                <BsArrowRightCircle  className='text-xl ml-1 text-brightRed inline' />
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;