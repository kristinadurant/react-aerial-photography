import React, { createContext, useState, useEffect } from 'react';
import { galleryRef } from '../firebase';

const GalleryContext = createContext({});

const GalleryContextProvider = ({ children }) => {
    const [ data, setData ] = useState([]);
    const [ search, setSearch ] = useState('');

    function getGallery() {
        galleryRef.get().then(querySnapshot => {
            const items = [];
            querySnapshot.forEach( doc => {
                items.push(doc.data());
            });
            setData(items);
        });   
    }

    useEffect(() => {
        getGallery();
    },[]); 

    const images = data?.filter(image => {
        return image.tags.toLowerCase().includes(search.toLowerCase());
    });

    let numberOfResults = images.length; 

  return (
    <GalleryContext.Provider 
        value={{
            images, 
            search,
            setSearch,
            numberOfResults
        }}>
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryContext, GalleryContextProvider };