import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ImagesCarousel = () => {
    const images = [
        { id: 0, description: 'Photoshop', img: 'brickell.jpg'},
        { id: 1, description: 'Portraits', img: 'portrait.jpg'},
        { id: 2, description: 'Aerial Videos of Properties', img: 'brickell.jpg'},
        { id: 3, description: 'Unique Prints', img: 'zion.jpg'}  
    ]
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 }
    };

    return (
        <section cla='carousel'>
            <Carousel
                keyBoardControl
                infinite
                autoPlay
                autoPlaySpeed={5000}
                transitionDuration={1000}
                responsive={responsive}
                arrows={false}
                >
                {images.map( item => {
                    return (
                        <div key={item.id}>
                            <img src={require(`../../assets/images/${item.img}`).default} alt={item.descripiton} width="100%" height="auto" />
                            <div></div>
                        </div>
                    );
                })}
            </Carousel>
            <Link to='/gallery'>View Gallery</Link>
        </section>
    )
}

export default ImagesCarousel;
