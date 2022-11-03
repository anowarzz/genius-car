import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {

const {title} = useLoaderData();

const {user} = useContext(AuthContext)


    return (
        <div>
            <div className=' bg-gray-100'>
                <h2 className="text-xl md:text-4xl font-semibold text-center pt-10"> <span className='text-brightRed  border-brightRed border p-1 md:p-2'>{title}</span></h2>
                <p className='text-center mt-3 md:mt-6'>Please Provide Your Details</p>
          <form className='grid grid-cols-1 lg:grid-cols-2 w-[100%] gap-3  p-20 '>
            <input type="text" placeholder="First Name" className="input input-bordered md:w-3/5" />
           <input type="text" placeholder="Last Name" className="input input-bordered md:w-3/5" />
           <input type="text" placeholder="Phone Number" className="input input-bordered md:w-3/5" />
           <input type="email" placeholder="Email" className="input input-bordered md:w-3/5 mb-12" defaultValue={user?.email} readOnly/>
          </form>
            </div>
        </div>
    );
};

export default Checkout;