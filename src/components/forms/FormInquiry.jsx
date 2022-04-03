import React, { useContext } from 'react';
import { BookmarksContext } from '../../context/BookmarksContext';
import { InputText, InputTextarea } from './components';

const FormInquiry = () => {
    const { bookmarks } = useContext(BookmarksContext);
    
    return (
        <>
            <InputText label='Name' id='name' required />
            <InputText label='Email' id='email' required type='email' />
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
            <InputTextarea label='Questions/Comments' />
        </>
    )
}

export default FormInquiry;
