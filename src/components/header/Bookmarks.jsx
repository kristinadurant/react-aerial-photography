import React, { useState, useContext } from 'react';
import BookmarksList from './BookmarksList';
import { BookmarksContext } from '../../context/BookmarksContext';

const Bookmarks = () => {
    const { bookmarks } = useContext(BookmarksContext);
    const [open, setOpen] = useState(false);

    return bookmarks.length? (
        <div className='bookmarks'>
            <div className='inner'>
                <button onClick={() => setOpen(!open)} title='Bookmarks'>
                    <span className='total'>{bookmarks.length}</span>
                    <span className='hide'>Bookmarked Images</span>
                    <i className="far fa-bookmark"></i>
                </button>
                {open && <BookmarksList setOpen={setOpen}/>}
            </div>       
        </div>
    ) : null;
}

export default Bookmarks;
