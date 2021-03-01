import React, { useContext } from 'react';
import { BookmarksContext } from '../../context/BookmarksContext';

const FormInquiry = () => {
    const { bookmarks, removeBookmark } = useContext(BookmarksContext);

    return (
            <div>
                <ul>
                    {bookmarks.map( item => {
                        return (
                            <li key={item.id}>
                                {item.title}
                                <button onClick={() => removeBookmark(item)}>x</button>
                            </li>
                    )})}
                </ul>
            </div>
    )
}

export default FormInquiry;
