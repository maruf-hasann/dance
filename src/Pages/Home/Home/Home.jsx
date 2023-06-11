import React from 'react';
import Hero from '../HeroSection/Hero';
import Popular from '../PopularClass/Popular';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Count from '../CountDown/Count';

const Home = () => {
    return (
        <div>
            
            <Hero></Hero>
            <Popular />
            <PopularInstructor />
            <Count/>
        </div>
    );
};

export default Home;