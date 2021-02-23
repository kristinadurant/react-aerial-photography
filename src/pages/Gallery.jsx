import React from 'react'
import { Search, Intro, Images } from '../components/gallery';
import { GalleryContextProvider } from '../context/GalleryContext';


const Gallery = () => {
    
    return (
        <main id='gallery-page'>
            <GalleryContextProvider>
                <Search />
                <Intro />
                <Images />
            </GalleryContextProvider>
        </main>
    )
}

export default Gallery
