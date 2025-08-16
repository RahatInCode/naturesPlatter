import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HoverImageGrid from '../../reUse/HoverImageGrid';
import Categories from '../Categories';
import BestSeller from '../BestSeller';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <HoverImageGrid />
            <Categories />
            <BestSeller />
        </div>
    );
};

export default Home;