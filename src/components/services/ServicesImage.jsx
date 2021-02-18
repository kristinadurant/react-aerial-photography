import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

const images = [
    { id: 0, description: 'Photoshop', img: 'brickell.jpg'},
    { id: 1, description: 'Portraits', img: 'portrait.jpg'},
    { id: 2, description: 'Aerial Videos of Properties', img: 'brickell.jpg'},
    { id: 3, description: 'Unique Prints', img: 'zion.jpg'}  
]

const ServicesImage = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(images[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
        duration: 5000
      })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 5000), [])

    return (
        <div style={{position: 'relative'}}>
            {transitions.map(({ item, props, key }) =>
            // <animated.div key={key} style={{...props, height: '300px', width: '200px', overflow: 'hidden'}}>
                <animated.div 
                key={key} style={{...props,   position: 'absolute',
                    top: 0,
                    left: 0,
                    willChange: 'opacity'}}                
                >
                    <img src={require(`../../assets/images/${item.img}`).default} width='300px' height='auto'  alt={item.description} 
                    />
                </animated.div>
                
            )}
        </div>

    )
}

export default ServicesImage
