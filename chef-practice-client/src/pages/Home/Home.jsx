import React from 'react';

import { Image } from 'react-bootstrap';
import background from '../../images/background.jpg'

import Marquee from "react-fast-marquee";
const Home = () => {
    return (
        <div className="text-center img-fluid mx-auto d-block">
             <Marquee className='text-success mt-4'>
             Embark on a flavorful journey with our food blog, where each bite is a story waiting to be savored
</Marquee>
            <div className='mt-4'>
            <Image    src={background}
    
    style={{ width: '60%', height: '100%' }}
       />;
            </div>
      
           
        </div>
    );
};

export default Home;