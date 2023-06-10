import React from 'react';
import Slider from '../Slider/Slider';

const Hero = () => {
    return (
      <div className="my_container">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <h2 className="lg:text-6xl text-3xl text-center lg:text-left font-bold mb-5 lg:mb-14">
              Dance For us is not <br className='lg:hidden' /> just an activity, it is
              <br className='lg:hidden' /> a way of life
            </h2>
            <button className='custom_btn'>Call Us</button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Slider></Slider>
          </div>
        </div>
      </div>
    );
};

export default Hero;