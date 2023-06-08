import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import "./Style.css"
// Image
import SliderOne from '../../../assets/SliderImg/image-caption2.jpg'
import SliderTwo from '../../../assets/SliderImg/image-caption.jpg'
import SliderThree from '../../../assets/SliderImg/image-caption3.jpg'
import SliderFour from '../../../assets/SliderImg/image-caption4.jpg'


const Slider = () => {
    return (
      <>
        <>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide><img src={SliderOne} alt="" /></SwiperSlide>
            <SwiperSlide><img src={SliderTwo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={SliderThree} alt="" /></SwiperSlide>
            <SwiperSlide><img src={SliderFour} alt="" /></SwiperSlide>
           
          </Swiper>
        </>
      </>
    );
};

export default Slider;