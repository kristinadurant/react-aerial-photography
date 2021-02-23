import React from 'react';
import { Banner, About, Services, Carousel } from '../components';

const Home = () => {
    return (
        <main id='home-page'>
            <Banner />
            <Services />
            <Carousel />
            <About />
        </main>
    )
}

export default Home
