import React, { createContext, useState, useEffect } from 'react';
import { galleryRef } from '../firebase';

const GalleryContext = createContext({});

const GalleryContextProvider = ({ children }) => {
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
    <GalleryContext.Provider value={{ images }}>
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryContext, GalleryContextProvider };