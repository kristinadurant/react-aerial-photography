import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const images = [
    { id: 0, description: 'Photoshop', img: 'brickell.jpg'},
    { id: 1, description: 'Portraits', img: 'portrait.jpg'},
    { id: 2, description: 'Aerial Videos of Properties', img: 'brickell.jpg'},
    { id: 3, description: 'Unique Prints', img: 'zion.jpg'}  
];

const ImagesCarousel = () => {

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
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
                        <img 
                            key={item.id}
                            src={require(`../../assets/images/${item.img}`).default} 
                            alt={item.descripiton} 
                            width="100%" height="auto" 
                        />
                    );
                })}
            </Carousel>
    )
}

export default ImagesCarousel;