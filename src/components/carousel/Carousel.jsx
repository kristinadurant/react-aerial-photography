import React from 'react';
import { Link } from 'react-router-dom';
import ImagesCarousel from './ImagesCarousel';

const Carousel = () => {
    return (
        <section className='carousel full-screen'>
            <div className='title'>
                <div className='inner'>

                </div>
            </div>
            <ImagesCarousel />
        </section>
    )
}

export default Carousel;
