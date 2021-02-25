import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { GalleryContext } from '../../context/GalleryContext';

const Image = ({ img }) => {
    const { favorites, addFavorite } = useContext(AppContext);
    const { setModal } = useContext(GalleryContext);
    const [ disabled, setDisabled ] = useState(false);

    function handleClick(img) {
        addFavorite(img);
        setDisabled(true);
    }
    useEffect(()=> {
        if(favorites.includes(img)) setDisabled(true);
    }, [favorites]);

    return (
        <div key={img.id} className='image'>
            <img src={require(`../../assets/images/${img.url}`).default} alt={img.title} height='auto' width='100%' />       
            <div className='overlay' onClick={() => setModal(img)} />
            <button onClick={() => handleClick(img)} disabled={disabled} title='Bookmark this Image'>
                <span className='hide'>Bookmark this Image</span>
                {disabled
                ? <i className="fas fa-bookmark"></i>
                : <i className="far fa-bookmark"></i>
                }
            </button>    
            
        </div>
    )
}

export default Image
