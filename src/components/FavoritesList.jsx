import React, { useState, useEffect, useContext } from 'react';
import { GalleryContext } from '../context/GalleryContext';


const FavoritesList = () => {
    const { images } = useContext(GalleryContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(()=> {
        const list = images.filter( image => {
            return image.favorite === true;
        });
        setFavorites(list);
    },[images]);

    function removeFavorite(img) {
        img.favorite = false;
    }

    return (
        <div className='container'>
            <ul>
                {favorites.map( item => {
                    return (
                    <li key={item.id}>
                        {item.title}
                        <button onClick={ item => removeFavorite(item)}>x</button>
                    </li>
                )})}
            </ul>
            <p>Send inquiry about your favorites</p>
        </div>
    )
}

export default FavoritesList;
