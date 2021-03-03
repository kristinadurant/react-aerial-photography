import React from 'react';
import { BannerVideo, Services, Gallery, PhotoEditing, SectionPhotoShoots } from '../components';

const Home = () => {
    return (
        <main id='home-page'>
            <BannerVideo />
            <Services />
            <SectionPhotoShoots />
            <Gallery />
            <PhotoEditing />
        </main>
    )
}

export default Home
