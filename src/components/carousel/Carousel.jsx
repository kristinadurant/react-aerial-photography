import React from 'react';
import { Link } from 'react-router-dom';
import ImagesCarousel from './ImagesCarousel';

const Carousel = () => {
    return (
        <section className='carousel full-screen'>
            <div className='title'>
                <div className='inner'>
                    <h2 className='font1'>Aerial Photo & Video Shoots</h2>
                    <div>
                        <p className='font2'>Creative 3D tours of your properties, Video Shoots with Breathtaking views</p>
                    </div>
                </div>
            </div>
            <ImagesCarousel />
        </section>
    )
}

export default Carousel;
