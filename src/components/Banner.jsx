import React from 'react';


const Banner = () => {
      
    return (
        <section className='banner'>
            <div className='container'>
                <h1 className='inner'>Aerial Photography</h1>
            </div>
            <div className='video-container'>
                <video width='auto' height='100%' autoPlay muted loop>
                    <source src='https://res.cloudinary.com/dyk6u3np0/video/upload/v1613526823/Zion_lv2gka.mp4' type='video/mp4'/>
                </video>     
            </div>      
            <div className='overlay'></div>
        </section>
    )
}

export default Banner;
