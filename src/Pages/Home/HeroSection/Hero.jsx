import React from 'react';
import Slider from '../Slider/Slider';
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";
const Hero = () => {
    return (
      <div className="my_container dark:text-white">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <Fade delay={1e3} cascade damping={1e-1}>
              <h2 className="lg:text-6xl text-3xl text-center lg:text-left font-bold mb-5 lg:mb-5">
                IMPROVE YOUR DANCE SKILLS WITH FLAIRE
              </h2>
            </Fade>
            <Zoom>
              <p className="text-base lg:text-start text-center mb-6">
                This also meant we needed to provide a learning environment run
                by <br></br>
                experienced and successful Instructor.
              </p>
            </Zoom>
            <Bounce>
              <button className="custom_btn mx-auto lg:ms-0">Call Us</button>
            </Bounce>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Slider></Slider>
          </div>
        </div>
      </div>
    );
};

export default Hero;