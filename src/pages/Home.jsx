import React from 'react';
import { BannerVideo, About, Services, Carousel } from '../components';

const Home = () => {
    return (
        <main id='home-page'>
            <BannerVideo />
            <Services />
            <Carousel />
            <About />
        </main>
    )
}

export default Home
