import React, { createContext, useState, useContext } from 'react';
import { AppContext } from './AppContext';
const GalleryContext = createContext({});

const GalleryContextProvider = ({ children }) => {
    const { images } = useContext(AppContext);
    const [ search, setSearch ] = useState('');


    const filteredImages = images?.filter(image => {
        return image.tags.toLowerCase().includes(search.toLowerCase());
    });

    let numberOfResults = filteredImages?.length; 

  return (
    <GalleryContext.Provider 
        value={{
            filteredImages,
            numberOfResults,
            search,
            setSearch
        }}>
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryContext, GalleryContextProvider };