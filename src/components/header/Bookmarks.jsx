import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookmarksContext } from '../../context/BookmarksContext';


const Bookmarks = ({ setOpen }) => {
    const { bookmarks, removeBookmark } = useContext(BookmarksContext);
    const [ list, setList] = useState(bookmarks);

    useEffect(() => setList(bookmarks), [bookmarks]);

    return (
        <div id='bookmarks' className='dropdown' onMouseLeave={() => setOpen(true)}>

            {bookmarks.length === 0
            ? <>
                <p>You haven't added any bookmarks yet.</p>
                <Link to='/gallery'>View Gallery</Link>
              </>
            
            : <>
                <ul>
                    {list.map( item => {
                        return (
                        <li key={item.id}>
                            {item.title}
                            <button className='square' onClick={() => removeBookmark(item)}>x</button>
                        </li>
                    )})}
                </ul>
                <Link to='/contact'>Send inquiry about your bookmarks</Link>
              </>
            }
        </div>
    )
}

export default Bookmarks;
