import React, { useContext } from 'react';
import { BookmarksContext } from '../../context/BookmarksContext';


const BookmarksList = ({ open, setOpen }) => {
    const { bookmarks, removeBookmark } = useContext(BookmarksContext);

    return open && (
        <div id='bookmarks' className='container' onMouseLeave={() => setOpen(false)}>
            <ul>
                {bookmarks.map( item => {
                    return (
                    <li key={item.id}>
                        {item.title}
                        <button onClick={() => removeBookmark(item)}>x</button>
                    </li>
                )})}
            </ul>
            <p>Send inquiry about your bookmarks</p>
        </div>
    )
}

export default BookmarksList;
