import React from 'react';
import { Banner, About, Services, Carousel } from '../components';

const Home = () => {
    return (
        <main>
            <Banner />
            <Services />
            <Carousel />
            <About />
        </main>
    )
}

export default Home
