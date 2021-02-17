import React from 'react';
import { Banner, About, Services } from '../components';
import { ServicesContextProvider } from '../context/ServicesContext';

const Home = () => {
    return (
        <main>
            <Banner />
            <ServicesContextProvider>
                <Services />
            </ServicesContextProvider>
            <Carousel />
            <About />
        </main>
    )
}

export default Home
