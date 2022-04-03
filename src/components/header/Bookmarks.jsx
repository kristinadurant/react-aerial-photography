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
                <p style={{ textAlign: 'center', padding: '1.5em 1em'}}>You haven't added any bookmarks yet.</p>
                <p><Link to='/gallery' className='font2'>View Gallery</Link></p>
              </>
            
            : <>
                <ul>
                    {list.map( item => {
                        return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <button className='square' onClick={() => removeBookmark(item)}>x</button>
                        </li>
                    )})}
                </ul>
                <p><Link to='/contact' className='font2'>Send an inquiry</Link></p>
              </>
            }
        </div>
    )
}

export default Bookmarks;
