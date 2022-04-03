// import React, { createContext, useState, useEffect } from 'react';
// import { galleryRef } from '../firebase';

// const GalleryContext = createContext({});

// const GalleryContextProvider = ({ children }) => {
//     const [ images, setImages ] = useState([]);
//     const [ search, setSearch ] = useState('');
//     const [ modal, setModal ] = useState(false);

//     function getImages() {
//       galleryRef.get().then(querySnapshot => {
//           const items = [];
//           querySnapshot.forEach( doc => {
//               items.push(doc.data());
//           });
//           setImages(items);
//       });   
//     }

//     useEffect(() => {
//         getImages();
//     },[]); 

//     const filteredImages = images?.filter(image => {
//         return image.tags.toLowerCase().includes(search.toLowerCase());
//     });

//     let numberOfResults = filteredImages?.length; 

//   return  <GalleryContext.Provider 
//         value={{
//             filteredImages,
//             numberOfResults,
//             search,
//             setSearch,
//             modal,
//             setModal
//         }}>

//     </GalleryContext.Provider>
//   ;
// };

// export { GalleryContext, GalleryContextProvider };