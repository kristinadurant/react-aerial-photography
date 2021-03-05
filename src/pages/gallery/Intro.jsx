import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';
import Search from './Search';

const Intro = () => {
    const { search, numberOfResults } = useContext(GalleryContext);
    
    return  (
        <section className='inner intro'>
            <div>
                <h1>
                    { search && search}
                    { !search && 'Gallery'}
                </h1>
                { !numberOfResults && <p>No results</p> }
            </div>
            <Search />
        </section>
    )
}

export default Intro;
