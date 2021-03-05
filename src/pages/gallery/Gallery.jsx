import React from 'react'
import Images from './Images';
import Intro from './Intro';
import Modal from './Modal';
import { Banner } from '../../components';
import { GalleryContextProvider } from '../../context/GalleryContext';
const image = require('../../assets/images/IMG_1531.jpg');

const Gallery = () => {
    
    return (
        <main id='gallery-page'>
            <GalleryContextProvider>

                <Banner title='High Resolution Images & Videos' image={image}>
                    <p className='font2' style={{ fontWeight: 'bold'}}>
                        Bookmark. Send an Inquiry. Receive.
                    </p>
                </Banner>

                <Intro />
                <Images />
                <Modal />
            </GalleryContextProvider>
        </main>
    )
}

export default Gallery