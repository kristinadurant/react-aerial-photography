import React from 'react';
import { Banner, About, Services, ImagesCarousel } from '../components';
import { ServicesContextProvider } from '../context/ServicesContext';

const Home = () => {
    return (
        <main>
            <Banner />
            <ServicesContextProvider>
                <Services />
            </ServicesContextProvider>
            <ImagesCarousel />
            <About />
        </main>
    )
}

export default Home
