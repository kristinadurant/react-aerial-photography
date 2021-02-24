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

    function addFavorite(img) {
        setFavorites([...favorites, img]);
    }

    function removeFavorite(img) {
        const newFavorites = favorites.filter(fav => fav !== img);
        setFavorites(newFavorites);
        console.log(img)
    }


  return (
    <AppContext.Provider 
        value={{
            images,
            setImages,
            favorites,
            addFavorite,
            removeFavorite
        }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };