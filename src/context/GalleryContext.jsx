import React, { createContext, useState, useEffect } from 'react';
import { galleryRef } from '../firebase';

const GalleryContext = createContext({});

const GalleryContextProvider = ({ children }) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ search, setSearch ] = useState('');

    function getGallery() {
        setLoading(true);
        galleryRef.get().then(querySnapshot => {
            const items = [];
            querySnapshot.forEach( doc => {
                items.push(doc.data());
            });
            setData(items);
        });   
        setLoading(false);
    }

    useEffect(() => {
        getGallery();
    },[]); 

    const images = data?.filter(image => {
        return image.tags.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <GalleryContext.Provider value={{ images, setSearch }}>
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryContext, GalleryContextProvider };