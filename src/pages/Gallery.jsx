import React from 'react'
import { Intro, Images, Modal } from '../components/gallery';
import { GalleryContextProvider } from '../context/GalleryContext';


const Gallery = () => {
    
    return (
        <main id='gallery-page'>
            <GalleryContextProvider>
                <Intro />
                <Images />
                <Modal />
            </GalleryContextProvider>
        </main>
    )
}

export default Gallery
