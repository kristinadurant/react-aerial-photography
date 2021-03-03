import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

const images = [
    { id: 0, description: 'Creative 3D tours of your properties', img: 'brickell.jpg'},
    { id: 1, description: 'Video Shoots with Breathtaking views', img: 'portrait.jpg'},
    { id: 2, description: 'Creative 3D tours of your properties', img: 'brickell.jpg'},
    { id: 3, description: 'Video Shoots with Breathtaking views', img: 'zion.jpg'}  
]

const Carousel = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(images[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
        duration: 5000
      })
    // useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 5000), [])

    return (
        <div style={{position: 'relative'}} className='image'>
            {transitions.map(({ item, props, key }) =>
                <animated.div 
                key={key} style={{...props,   position: 'absolute',
                    top: 0,
                    left: 0,
                    willChange: 'opacity'}}                
                >
                    <img src={require(`../../assets/images/${item.img}`).default} width='1920px' height='auto'  alt={item.description} 
                    />
                </animated.div>
                
            )}
            <div className='inner'>
                <h2 className='font1'>
                    Aerial Photo & Video Shoots
                </h2>
                <div className='flex-justify'>         
                    <p className='font2'>
                        {images[0].description}
                    </p>
                    <div className='pagination'>
                        <button>left</button>
                        <span></span>
                        <span>/4</span>
                        <button>right</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carousel
