import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../About/About'
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
           <Banner />
            <About />
           <Services />
           <Products />
        </div>
    );
};

export default Home;