import React, { useState, useEffect, useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';
import { BookmarksContext } from '../../context/BookmarksContext';

const Image = ({ img }) => {
    const { bookmarks, addBookmark } = useContext(BookmarksContext);
    const { setModal } = useContext(GalleryContext);
    const [ disabled, setDisabled ] = useState(false);

    // useEffect(() => {
    //     const bookmarked = bookmarks?.filter(bookmark => bookmark.url === img.url);
    //     bookmarked?.length > 0? setDisabled(true) : setDisabled(false);
    // });

    return (
        <div  className='image'>
            {/* <img src={require(`../../assets/images/${img.url}`)} alt={img.title} height='auto' width='100%' />       
            <div className='overlay' onClick={() => setModal(img)}>
            <button 
                className='square'
                onClick={() => addBookmark(img)} disabled={disabled} 
                title='Bookmark this Image'
            >
                <span>Bookmark this Image</span>
                {disabled
                ? <i className="fas fa-bookmark"></i>
                : <i className="far fa-bookmark"></i>
                }
            </button>    
            </div> */}
        </div>
    )
}

export default Image
