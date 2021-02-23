import React from 'react'
import Images from '../components/gallery/Images';
import Search from '../components/gallery/Search';
import { GalleryContextProvider } from '../context/GalleryContext';


const Gallery = () => {

    
    return (
        <main id='gallery-page'>
            <GalleryContextProvider>
                <Search />
                <Images />
            </GalleryContextProvider>
        </main>
    )
}

export default Gallery
