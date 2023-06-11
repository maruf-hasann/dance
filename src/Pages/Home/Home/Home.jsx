import React from 'react';
import Hero from '../HeroSection/Hero';
import Popular from '../PopularClass/Popular';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            
            <Hero></Hero>
            <Popular />
            <PopularInstructor/>
        </div>
    );
};

export default Home;