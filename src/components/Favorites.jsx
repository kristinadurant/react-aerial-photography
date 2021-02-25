import React, { useState } from 'react';
import FavoritesList from './FavoritesList';

const Favorites = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='favorites'>
            <div className='inner'>
                <button onClick={() => setOpen(!open)} title='Bookmarks'>
                    <span className='hide'>Bookmarked Images</span>
                    <i className="far fa-bookmark"></i>
                </button>
                <FavoritesList open={open} setOpen={setOpen}/>
            </div>       
        </div>
    )
}

export default Favorites;
