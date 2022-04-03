import './style.css';
import React from 'react';
import { BannerVideo } from '../../components';
import { Helmet } from 'react-helmet';
import About from './about/About';
import PhotoShoots from './photoShoots/PhotoShoots';
import PhotoEditing from './photoEditing/PhotoEditing';

const Home = () => {
    return (
        <main id='home-page'>

            <Helmet>
                <title>Aerial Photographer and Videographer</title>
                <meta name='description' content='Photo and Video Shoots in Miami, download high resolution photos and videos, professional photo editing' />
                <meta name='keywords' content='Aerial Photo Video Drone Miami' />
            </Helmet>

            <BannerVideo />
            <PhotoShoots />
            <PhotoEditing />
            <About />
            {/* <Instagram /> */}
        </main>
    )
}

export default Home
