import React, { useContext, useState, useEffect } from 'react';
import { BookmarksContext } from '../../context/BookmarksContext';


const BookmarksList = ({ setOpen }) => {
    const { bookmarks, removeBookmark } = useContext(BookmarksContext);
    const [ list, setList] = useState(bookmarks);

    useEffect(() => setList(bookmarks), [bookmarks]);

    return (
        <div id='bookmarks' className='container' onMouseLeave={() => setOpen(false)}>
            <ul>
                {list.map( item => {
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
