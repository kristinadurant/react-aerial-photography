import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const FavoritesList = () => {
    const { favorites, removeFavorite } = useContext(AppContext);


    return (
        <div className='container'>
            <ul>
                {favorites.map( item => {
                    return (
                    <li key={item.id}>
                        {item.title}
                        <button onClick={() => removeFavorite(item)}>x</button>
                    </li>
                )})}
            </ul>
            <p>Send inquiry about your favorites</p>
        </div>
    )
}

export default FavoritesList;
