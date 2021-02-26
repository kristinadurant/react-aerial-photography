import React from 'react';
import { BannerVideo, Services, Carousel } from '../components';

const Home = () => {
    return (
        <main id='home-page'>
            <BannerVideo />
            <Services />
            <Carousel />
        </main>
    )
}

export default Home
