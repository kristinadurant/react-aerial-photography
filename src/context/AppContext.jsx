import React, { createContext, useState, useEffect } from 'react';
import { galleryRef } from '../firebase';

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
    const [ images, setImages ] = useState([]);
    const [ favorites, setFavorites] = useState([]);

    function getImages() {
        galleryRef.get().then(querySnapshot => {
            const items = [];
            querySnapshot.forEach( doc => {
                items.push(doc.data());
            });
            setImages(items);
        });   
    }

    useEffect(() => {
        getImages();
    },[]); 


  return (
    <AppContext.Provider 
        value={{
            images,
            setImages,
            favorites,
            setFavorites
        }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };