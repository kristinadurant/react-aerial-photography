import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';
import Search from './Search';

const Intro = () => {
    const { search, numberOfResults } = useContext(GalleryContext);
    
    return  (
        <section className='intro'>
            <div className='inner'>
                <div className='flex-justify' style={{alignItems: 'flex-start'}}>
                    <h2 className='font1'>Gallery</h2>                                      
                    <Search />                  
                </div>
                { search && <em> {search}</em>}
                { !numberOfResults && <em> - No results</em> }
            </div>
        </section>
    )
}

export default Intro;
