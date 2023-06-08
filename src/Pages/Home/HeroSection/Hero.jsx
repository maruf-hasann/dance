import React from 'react';
import Slider from '../Slider/Slider';

const Hero = () => {
    return (
      <div className="my_container">
        <div className='flex'>
          <div className='w-1/2'>
            <h2>Dance For us is not just an activity, it is a way of life</h2>
            <button>Call Us</button>
          </div>
          <div className='w-1/2'>
            <Slider></Slider>
          </div>
        </div>
      </div>
    );
};

export default Hero;