import React from 'react';
import { BannerVideo, Services, PhotoEditing, Carousel } from '../components';

const Home = () => {
    return (
        <main id='home-page'>
            <BannerVideo />
            <Services />
            <Carousel />
            <PhotoEditing />
        </main>
    )
}

export default Home
