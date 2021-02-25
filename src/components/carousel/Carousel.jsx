import React from 'react';
import { Link } from 'react-router-dom';
import ImagesCarousel from './ImagesCarousel';

const Carousel = () => {
    return (
        <section className='carousel full-screen'>
            <div className='title'>
                <div className='inner'>
                    <h2 style={{ fontSize: '1em'}}>
                        <p className='font2'>High Resolution</p>
                        <p className='font1'>Photos & Videos</p>
                    </h2>
                    <ol> 
                        <li>- Bookmark Images</li>
                        <li>- Send an Inquiry</li>
                        <li>- Choose type of Payment</li>
                        <li>- Receive High Resolution Files</li>
                    </ol>
                    <Link to='/gallery'>View Gallery</Link>
                </div>
            </div>
            <ImagesCarousel />
        </section>
    )
}

export default Carousel;
