import React from 'react'
import { Intro, Images } from '../components/gallery';
import { GalleryContextProvider } from '../context/GalleryContext';


const Gallery = () => {
    
    return (
        <main id='gallery-page'>
            <GalleryContextProvider>
                <Intro />
                <Images />
            </GalleryContextProvider>
        </main>
    )
}

export default Gallery
