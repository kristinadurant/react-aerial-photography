import React, { useState, useContext } from 'react';
import FavoritesList from './FavoritesList';
import { AppContext } from '../context/AppContext';

const Favorites = () => {
    const { favorites } = useContext(AppContext);
    const [open, setOpen] = useState(false);

    return favorites.length? (
        <div className='favorites'>
            <div className='inner'>
                <button onClick={() => setOpen(!open)} title='Bookmarks'>
                    <span className='total'>{favorites.length}</span>
                    <span className='hide'>Bookmarked Images</span>
                    <i className="far fa-bookmark"></i>
                </button>
                <FavoritesList open={open} setOpen={setOpen}/>
            </div>       
        </div>
    ) : null;
}

export default Favorites;
