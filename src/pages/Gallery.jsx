import React, { useState, useEffect } from 'react'
import Images from '../components/gallery/Images';
import Search from '../components/gallery/Search';
import { galleryRef } from '../firebase';

const Gallery = () => {
    const [ images, setImages ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    function getGallery() {
        setLoading(true);
        galleryRef.get().then(querySnapshot => {
            const items = [];
            querySnapshot.forEach( doc => {
                items.push(doc.data());
            });
            setImages(items);
        });   
        setLoading(false);
    }

    useEffect(() => {
        getGallery();
    },[]);
    
    return (
        <main id='gallery-page'>
            <Search />
            <Images images={images} />
        </main>
    )
}

export default Gallery
