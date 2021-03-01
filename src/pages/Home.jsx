import React from 'react';
import { BannerVideo, Services, Gallery, PhotoEditing, Carousel } from '../components';

const Home = () => {
    return (
        <main id='home-page'>
            <BannerVideo />
            <Services />
            <Carousel />
            <Gallery />
            <PhotoEditing />
        </main>
    )
}

export default Home
