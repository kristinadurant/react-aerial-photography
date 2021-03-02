import React, { useContext } from 'react';
import { BookmarksContext } from '../../context/BookmarksContext';

const FormInquiry = () => {
    const { bookmarks } = useContext(BookmarksContext);
    
    return (
        <>
            <fieldset>
                <legend>Bookmarked Photos & Videos</legend>
                <ul>
                    {bookmarks.map( item => {
                        return (
                            <li key={item.url}>                           
                                <input type='checkbox' defaultChecked
                                    id={item.url} name={item.title} value={item.url} 
                                />
                                <label htmlFor={item.url}>{item.title}</label>
                            </li>
                    )})}
                </ul>
            </fieldset>

            <div>
                <label htmlFor='message'>
                    Questions/Comments
                </label>
                <textarea id='message' name='message' rows="4"/>
            </div>
        </>
    )
}

export default FormInquiry;
