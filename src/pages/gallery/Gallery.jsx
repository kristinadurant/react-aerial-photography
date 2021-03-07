import React from 'react';
import { Helmet } from 'react-helmet';
import Images from './Images';
import Intro from './Intro';
import Modal from './Modal';
import { Banner } from '../../components';
import { GalleryContextProvider } from '../../context/GalleryContext';
const image = require('../../assets/images/IMG_1531.jpg');

const Gallery = () => {
    
    return (
        <main id='gallery-page'>

            <Helmet>
                <title>High Resolution Images & Videos</title>
                <meta name='description' content='Download high resolution photos and videos.' />
                <meta name='keywords' content='Aerial Photo Video Drone Gallery Images' />
            </Helmet>

            <GalleryContextProvider>

                <Banner 
                    title='High Resolution Images & Videos' 
                    subtitle='Bookmark. Send an Inquiry. Receive.'
                    image={image}
                />

                <Intro />
                <Images />
                <Modal />
                
            </GalleryContextProvider>
        </main>
    )
}

export default Gallery
