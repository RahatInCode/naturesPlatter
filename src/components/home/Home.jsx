import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HoverImageGrid from '../../reUse/HoverImageGrid';
import Categories from '../Categories';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <HoverImageGrid />
            <Categories />
        </div>
    );
};

export default Home;