import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';
import Image from './Image';

const Images = () => {
    const { filteredImages } = useContext(GalleryContext);

    return (
        <section className='gallery inner'>
            {filteredImages.map(img => {
                return (
                    <Image img={img} />
                )
            })}
            {filteredImages.map(img => {
                return (
                    <Image img={img} />
                )
            })}
            {filteredImages.map(img => {
                return (
                    <Image img={img} />
                )
            })}
        </section>
    )
}

export default Images
