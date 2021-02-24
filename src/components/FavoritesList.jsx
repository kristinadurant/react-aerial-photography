import React, { useContext } from 'react';
import { GalleryContext } from '../context/GalleryContext';


const FavoritesList = () => {
    const { images } = useContext(GalleryContext);

    const favorites = images.filter( image => {
        return image.favorite === true;
    });
    console.log(images);
    return (
        <div className='container'>
            {favorites.map( item => {
                return <p>{item.title}</p>
            })}
        </div>
    )
}

export default FavoritesList;
