import React from 'react';
import appLocalization from '../../assets/localization';
import { Hidden } from '../../styledComponents/elements';

const Banner = () => {
      
    function handleScroll() {
        document.querySelector('.banner + *').scrollIntoView()
    }

    return (
        <section className='banner full-screen'>
            <div className='overlay' style={{ backgroundColor: '#4c4c4c7a'}}>
                <div className='inner'>
                    <h1>{appLocalization.bannerTitle}</h1>
                    <button 
                        className='square' title='Scroll Down'
                        onClick={handleScroll} 
                    >
                        <Hidden>Scroll Down</Hidden>
                        <i className="fas fa-sort-down fa-3x"></i>
                    </button>
                </div>
            </div>
            <div className='video-container'>
                <img src={require('../../assets/images/DJI_0382.jpg')} />
                <video width='100%' height='auto' autoPlay muted loop>
                    <source src='' type='video/mp4'/>
                </video>     
            </div>      
        </section>
    )
}

export default Banner;
