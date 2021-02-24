import React, { useState } from 'react';
import FavoritesList from './FavoritesList';

const Favorites = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='favorites'>
            <div className='inner'>
                <button onClick={() => setOpen(!open)}>
                    <span className='hide'>Favorites</span>
                    <i className="far fa-heart"></i>
                </button>
            </div>
            {open && <FavoritesList />}
        </div>
    )
}

export default Favorites;
