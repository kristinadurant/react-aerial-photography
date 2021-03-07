import React from 'react';

const Banner = () => {
      
    function handleScroll() {
        document.getElementById('services').scrollIntoView();
    }

    return (
        <section className='banner full-screen'>
            <div className='overlay' style={{ backgroundColor: '#4c4c4c7a'}}>
                <div className='inner'>
                    <h1>Aerial Videography</h1>
                    <button 
                        className='square' title='Scroll Down'
                        onClick={handleScroll} 
                    >
                        <span className='hide'>Scroll Down</span>
                        <i className="fas fa-sort-down fa-3x"></i>
                    </button>
                </div>
            </div>
            <div className='video-container'>
                <video width='100%' height='auto' autoPlay muted loop>
                    <source src='https://res.cloudinary.com/dyk6u3np0/video/upload/v1613526823/Zion_lv2gka.mp4' type='video/mp4'/>
                </video>     
            </div>      
        </section>
    )
}

export default Banner;
