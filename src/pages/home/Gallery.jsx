import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

const Gallery = ({ images }) => {
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
        // <div style={{position: 'relative'}} className='image'>
        //     {transitions.map(({ item, props, key }) =>
        //         <animated.div 
        //         key={key} style={{...props,   position: 'absolute',
        //             top: 0,
        //             left: 0,
        //             willChange: 'opacity'}}                
        //         >
        //             <img src={require(`../../assets/images/${item.img}`)} width='1920px' height='auto'  alt={item.description} 
        //             />
        //         </animated.div>
                
        //     )}
            <section className='section2'>
                <div className='images'>
                    {images.map(img => { 
                        return (
                            <div>
                                <p className='font2'>{img.title}</p>
                                <img key={img} src={img.url} alt={img.alt} />
                            </div>
                        )
                    })}
                </div>
            </section>

    )
}

export default Gallery;
