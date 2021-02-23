import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';

const Intro = () => {
    const { search, numberOfResults } = useContext(GalleryContext);
    
    return  (
        <div className='inner'>
            <h1>
                { search && search}
                { !search && 'Gallery'}
            </h1>
            { !numberOfResults && <p>No results</p> }
        </div>
    )
}

export default Intro;
