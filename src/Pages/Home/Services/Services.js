import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

const [services, setServices] = useState([]);

useEffect( () => {
    fetch('https://genius-car-server-chi-three.vercel.app/services')
    .then(res => res.json())
    .then(data => setServices(data))
}, [])

    return (
        <div>
            <div className='text-center mb-14'>
                <p className='text-2xl font-bold text-brightRed'>Services</p>
        <h2 className='text-5xl font-semibold mt-5' >Our Service Area</h2>
        <p className='p-6'>
        The majority have suffered alteration in some form, by injected humour <br /> or randomised words which don't look even slightly believable. 
        </p>
            </div>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                services.map(service => <ServiceCard key={service._id}
                service = {service}
                />)
               }
            </div>

            <div className='text-center mt-12 mb-32'>
                <button className='btn btn-outline border-brightRed text-brightRed hover:bg-brightRed hover:border-none'>
               More Services
                </button>
            </div>
        </div>
    );
};

export default Services;