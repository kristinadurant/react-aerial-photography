import React from 'react';
import { Link } from 'react-router-dom';
import ImagesCarousel from './ImagesCarousel';

const Carousel = () => {
    return (
        <section className='carousel full-screen'>
            <ImagesCarousel />
            <div className='overlay'>
                <div className='inner'>
                    <p>
                        Breathtaking Views
                    </p>
                </div>
            </div>
            <div className='link'>
                <Link to='/gallery'>View Gallery</Link>
                <i className="fas fa-long-arrow-alt-right"></i>
            </div>
        </section>
    )
}

export default Carousel;
